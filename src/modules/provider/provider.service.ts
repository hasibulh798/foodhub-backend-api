import {
  DietaryType,
  OrderStatus,
  Prisma,
  UserRole,
} from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

// Create meal
const createMeal = async (
  payload: {
    categoryId: string;
    name: string;
    description: string;
    price: Prisma.Decimal;
    imageUrl: string;
    cuisine?: string | undefined;
    dietaryType?: DietaryType | undefined;
  },
  userId: string,
) => {
  const {
    name,
    description,
    price,
    categoryId,
    imageUrl,
    cuisine,
    dietaryType,
  } = payload;

  const provider = await prisma.provider_profile.findUnique({
    where: {
      userId,
    },
    include: {
      user: true,
    },
  });
  // console.log(provider);
  if (!provider) {
    throw new Error("You are not provider!");
  }

  if (provider.user?.role !== UserRole.PROVIDER || provider.isVerified !== true) {
    throw new Error("Permission denied!");
  }
  // console.log("before result");
  // console.log(payload);
  const result = await prisma.meal.create({
    data: {
      name,
      description,
      price,
      imageUrl,
      categoryId,
      cuisine: cuisine ?? null,
      dietaryType: dietaryType ?? null,
      providerId: provider.id,
    },
  });

  // console.log("after result");
  // console.log(result);
  return result;
};

//Update meal
const updateMeal = async (
  payload: {
    name: string;
    description: string;
    imageUrl: string;
    price: Prisma.Decimal;
    isAvailable: boolean;
  },
  mealId: string,
  userId: string,
) => {
  const provider = await prisma.provider_profile.findUnique({
    where: {
      userId,
    },
    include: {
      user: true,
    },
  });

  if (!provider) {
    throw new Error("You are not provider!");
  }

  if (provider.user?.role !== UserRole.PROVIDER) {
    throw new Error("Permission denied!");
  }
  const meal = await prisma.meal.findUnique({
    where: {
      id: mealId,
    },
  });
  if (!meal) {
    throw new Error("Meal not found");
  }
  const result = await prisma.meal.update({
    where: {
      id: mealId,
    },
    data: payload,
  });
  return result;
};


// Delete meal
const deleteMeal = async (mealId: string, userId: string) => {
  const provider = await prisma.provider_profile.findUnique({
    where: {
      userId,
    },
    include: {
      user: true,
    },
  });

  if (provider?.user.role !== UserRole.PROVIDER) {
    throw new Error("You are not provider!");
  }

  const result = await prisma.meal.delete({
    where: {
      id: mealId,
    },
  });
  return result;
};

//Update Order Status

const updateOrderStatus = async (
  orderId: string,
  userId: string,
  status: OrderStatus,
) => {
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
  const provider = await prisma.provider_profile.findUnique({
    where: {
      userId,
    },
  });
  if (user.role !== UserRole.PROVIDER || order.providerId !== provider?.id) {
    throw new Error("You are not Provider of this order");
  }
  const result = await prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      status,
    },
  });
  return result;
};

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
export const providerService = {
  createMeal,
  updateMeal,
  deleteMeal,
  updateOrderStatus,
  cancelOrder,
};
