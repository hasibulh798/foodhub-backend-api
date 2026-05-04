import { UserRole } from "@prisma/client";
import { prisma } from "../../lib/prisma.js";

const createReview = async (
  payload: {
    orderId: string;
    mealId: string;
    rating: number;
    comment?: string;
  },
  userId: string,
) => {
  const { orderId, mealId, rating, comment } = payload;
  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      orderItems: true,
    },
  });
  console.log("user Id : ", userId);
  if (!order) {
    throw new Error("Order not found");
  }

  if (order.customerId !== userId) {
    throw new Error("Order does not belong to this customer");
  }

  if (order.status !== "DELIVERED") {
    throw new Error("Order is not delivered yet");
  }

  const orderItem = order.orderItems.find((item) => item.mealId === mealId);

  if (!orderItem) {
    throw new Error("Meal is not part of this order");
  }

  const result = await prisma.review.create({
    data: {
      ...payload,
      customerId: userId,
    },
  });

  return result;
};

// Get all reviews for a user
const getAllReviews = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.role === UserRole.CUSTOMER) {
    const reviews = await prisma.review.findMany({
      where: {
        customerId: userId,
      },
      include: {
        meal: {
          select: {
            id: true,
            name: true,
            price: true,
            provider: {
              select: {
                id: true,
                businessName: true,
              },
            },
          },
        },
      },
    });
    return reviews;
  } else if (user.role === UserRole.PROVIDER) {
    const provider = await prisma.provider_profile.findUnique({
      where: {
        userId,
      },
    });

    if (!provider) {
      throw new Error("Provider profile not found");
    }

    const reviews = await prisma.review.findMany({
      where: {
        meal: {
          providerId: provider.id,
        },
      },
      include: {
        meal: {
          select: {
            id: true,
            name: true,
          },
        },
        customer: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return reviews;
  } else if (user.role === UserRole.ADMIN) {
    const reviews = await prisma.review.findMany({
      include: {
        meal: {
          select: {
            id: true,
            name: true,
          },
          include: {
            provider: {
              select: {
                id: true,
                businessName: true,
              },
            },
          },
        },
        customer: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return reviews;
  } else {
    throw new Error("Unauthorized !!");
  }
};

// Get all reviews for a meal
const getMealReviews = async (mealId: string) => {
  const result = await prisma.review.findMany({
    where: {
      mealId,
    },

    include: {
      customer: {
        select: {
          id: true,
          name: true,
        },
      },
      order: {
        select: {
          id: true,
          createdAt: true,
        },
      },
    },
  });
  return result;
};

//Delete Review
const deleteReview = async (reviewId: string, userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new Error("user not found");
  }
  const review = await prisma.review.findUnique({
    where: {
      id: reviewId,
    },
  });
  if (!review) {
    throw new Error("Review not found");
  }
  const isAdmin = user.role === UserRole.ADMIN;
  const owner = review.customerId === userId;
  if (!isAdmin && !owner) {
    throw new Error("Forbidden!");
  }
  const result = await prisma.review.delete({
    where: {
      id: reviewId,
    },
  });

  return result;
};
const getPublicReviews = async () => {
  const reviews = await prisma.review.findMany({
    where: {
      rating: {
        gte: 4,
      },
    },
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      customer: {
        select: {
          name: true,
          image: true,
        },
      },
      meal: {
        select: {
          name: true,
        },
      },
    },
  });
  return reviews;
};

export const reviewService = {
  createReview,
  getAllReviews,
  getMealReviews,
  deleteReview,
  getPublicReviews,
};
