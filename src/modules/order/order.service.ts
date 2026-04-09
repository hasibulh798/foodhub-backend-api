import {
  OrderStatus,
  PaymentMethod,
  UserRole,
} from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

// Create Order
const createOrder = async (
  orderData: {
    phone: string;
    paymentMethod: PaymentMethod;
    deliveryAddress: string;
    Items: { mealId: string; quantity: number }[];
  },
  userId: string,
) => {
  const { Items: items, deliveryAddress, paymentMethod, phone } = orderData;

  if (!items || items.length === 0) {
    throw new Error("No items provided!");
  }

  const mealIds = items.map((item) => item.mealId);

  const meals = await prisma.meal.findMany({
    where: {
      id: { in: mealIds },
    },
  });

  let subtotal = 0;
  const orderItemsData = items.map((item) => {
    const meal = meals.find((m) => m.id === item.mealId);
    if (!meal) {
      throw new Error("Meal not found!");
    }

    const itemsTotal = Number(meal.price) * item.quantity;

    subtotal += itemsTotal;

    return {
      mealId: item.mealId,
      quantity: item.quantity,
      price: meal.price,
    };
  });

  if (meals.length !== items.length) {
    throw new Error("Invalid meal found");
  }

  const providerId = meals[0]!.providerId;

  const allSameProvider = meals.every((meal) => meal.providerId === providerId);

  if (!allSameProvider) {
    throw new Error("You cannot order from multiple providers in one order");
  }
  // const provider = await prisma.provider_profile.findUnique({
  //   where: {
  //     id: providerId
  //   }
  // })
  // if(!provider){
  //   throw new Error("Provider not found")
  // }

  const deliveryFee = 120;
  const totalAmount = subtotal + deliveryFee;

  const result = await prisma.order.create({
    data: {
      customerId: userId,
      providerId,
      phone,
      paymentMethod,
      subtotal,
      deliveryFee,
      totalAmount,
      orderItems: {
        create: orderItemsData,
      },
      deliveryAddress,
    },
    include: {
      orderItems: true,
    },
  });

  return result;
};

// Get all orders
const getAllOrders = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  const userRole = user?.role;
  let orders;
  if (userRole === UserRole.CUSTOMER) {
    orders = await prisma.order.findMany({
      where: {
        customerId: userId,
      },
      include: {
        orderItems: {
          include: {
            meal: true,
          },
        },
        provider: {
          select: {
            businessName: true,
            address: true,
          },
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  } else if (userRole === UserRole.PROVIDER) {
    const provider = await prisma.provider_profile.findUnique({
      where: {
        userId,
      },
    });
    if (!provider) {
      throw new Error("Provider not found!");
    }
    orders = await prisma.order.findMany({
      where: {
        providerId: provider.id,
      },
      include: {
        orderItems: {
          include: {
            meal: true,
          },
        },
        customer: {

          select: {
            name: true,
            phone: true,
          },
        },
      },
      
      orderBy: {
        createdAt: "desc",
      },
    });
  } else if (userRole === UserRole.ADMIN) {
    orders = await prisma.order.findMany({
      include: {
        orderItems: {
          include: {
            meal: true,
          },
        },
        provider: {
          select: {
            businessName: true,
            address: true,
            meals: true,
          },
        },
        customer: {
          select: {
            name: true,
            email: true,
            phone: true,
          },
        },
      },
    });

  } else {
    throw new Error("Unauthorized !!");
  }
  return orders;
};

//Get single order
const getSingleOrder = async (orderId: string, userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      orderItems: {
        include: {
          meal: true,
        },
      },
      customer: {

        select: {
          id: true,
          name: true,
        },
      },
      provider: {
        select: {
          id: true,
          businessName: true,
        },
      },
    },
  });

  if (!order) {
    throw new Error("Order not found");
  }

  if (user?.role === UserRole.CUSTOMER && order.customerId !== user.id) {
    throw new Error("Forbiden");
  }
  if (user?.role === UserRole.PROVIDER) {
    const provider = await prisma.provider_profile.findUnique({
      where: {
        userId,
      },
    });
    if (!provider || order.providerId !== provider.id) {
      throw new Error("Forbiden");
    }
  }

  return order;
};

// Update order
// const updateOrderStatus = async (
//   orderId: string,
//   userId: string,
//   status: OrderStatus,
// ) => {
//   const user = await prisma.user.findUnique({
//     where: {
//       id: userId,
//     },
//   });

//   if (!user) {
//     throw new Error("User not found");
//   }

//   const order = await prisma.order.findUnique({
//     where: {
//       id: orderId,
//     },
//   });

//   if (!order) {
//     throw new Error("Order not found");
//   }
//   const provider = await prisma.provider_profile.findUnique({
//     where: {
//       userId,
//     },
//   });
//   if (user.role !== UserRole.PROVIDER || order.providerId !== provider?.id) {
//     throw new Error("You are not Provider of this order");
//   }
//   const result = await prisma.order.update({
//     where: {
//       id: orderId,
//     },
//     data: {
//       status,
//     },
//   });
//   return result;
// };

//Cancel order
const cancelOrder = async (orderId: string, userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  });

  if (!order) {
    throw new Error("Order not found");
  }

  if (user.role === UserRole.CUSTOMER) {
    if (order.customerId !== user.id) {
      throw new Error("Forbidden");
    }

    if (order.status !== OrderStatus.PENDING) {
      throw new Error("Customer can only cancel pending orders");
    }
  }

  if (user.role === UserRole.PROVIDER) {
    const provider = await prisma.provider_profile.findUnique({
      where: { userId: user.id },
    });

    if (!provider || order.providerId !== provider.id) {
      throw new Error("Forbidden");
    }

    if (order.status === OrderStatus.DELIVERED) {
      throw new Error("Cannot cancel. completed order");
    }
    if (order.status === OrderStatus.CANCELLED) {
      throw new Error("Order is already cancelled");
    }
  }
  const result = await prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      status: OrderStatus.CANCELLED,
    },
  });

  return result;
};

// const deleteOrder = async (orderId: string, userId: string) => {
//   const user = await prisma.user.findUnique({
//     where: {
//       id: userId,
//     },
//   });

//   if (!user) {
//     throw new Error("User not found");
//   }

//   const order = await prisma.order.findUnique({
//     where: {
//       id: orderId,
//     },
//   });

//   if (!order) {
//     throw new Error("Order not found");
//   }

//   if (user.role === UserRole.CUSTOMER && order.customerId !== user.id) {
//     throw new Error("Forbidden");
//   }

//   if (user.role === UserRole.PROVIDER) {
//     const provider = await prisma.provider_profile.findUnique({
//       where: {
//         userId,
//       },
//     });
//     if (!provider || order.providerId !== provider.id) {
//       throw new Error("Forbidden");
//     }
//   }

//   const result = await prisma.order.delete({
//     where: {
//       id: orderId,
//     },
//   });

//   return result;
// };

export const orderService = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  // updateOrderStatus,
  cancelOrder,
  // deleteOrder,
};
