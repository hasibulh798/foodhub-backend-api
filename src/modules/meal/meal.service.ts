import {
  DietaryType,
  Prisma,
  UserRole,
} from "@prisma/client";
import { prisma } from "../../lib/prisma.js";



// Get all meals
const getAllMeals = async (filter?: {
  search?: string | undefined;
  isAvailable?: boolean | undefined;
  cuisine?: string | undefined;
  dietaryType?: DietaryType | undefined;
  categoryId?: string | undefined;
  providerId?: string | undefined;
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
  page?: number;
  limit?: number;
}) => {
  const {
    search,
    isAvailable,
    cuisine,
    dietaryType,
    categoryId,
    providerId,
    minPrice,
    maxPrice,
    page,
    limit,
  } = filter || {};
  const currentPage = Number(page) || 1;
  const currentLimit = Number(limit) || 12;
  // console.log("take: ", currentLimit);
  const skip = (currentPage - 1) * currentLimit;

  const andConditions: Prisma.MealWhereInput[] = [];

 if (categoryId && categoryId.trim() !== "") {
  andConditions.push({
    categoryId: categoryId.trim(),
  });
}
if (providerId && providerId.trim() !== "") {
  andConditions.push({
    providerId: providerId.trim(),
  });
}

  if (search) {
    andConditions.push({
      OR: [
        {
          name: {
            contains: search as string,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: search as string,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  if (isAvailable !== undefined) {
    andConditions.push({
      isAvailable: isAvailable,
    });
  }

  if (cuisine) {
    andConditions.push({
      cuisine: {
        equals: cuisine,
        mode: "insensitive",
      },
    });
  }

  if (dietaryType !== undefined) {
    andConditions.push({
      dietaryType: dietaryType as DietaryType,
    });
  }

  if (minPrice !== undefined || maxPrice !== undefined) {
    const priceFilter: any = {};

    if (minPrice !== undefined) {
      priceFilter.gte = Number(minPrice);
    }

    if (maxPrice !== undefined) {
      priceFilter.lte = Number(maxPrice);
    }

    andConditions.push({
      price: priceFilter,
    });
  }

  const totalCount = await prisma.meal.count({
    where: {
      AND: andConditions,
    },
  });

  const data = await prisma.meal.findMany({
    where: {
      AND: andConditions,
    },
    skip,
    take: currentLimit,
    orderBy: {
      price: "asc",
    },
    include: {
      provider: true,
      order_items: {
        select: {
          orderId: true,
          quantity: true,
          price: true,
        },
      },
      reviews: {
        select: {
          rating: true,
          comment: true,
          customer: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return {
    data,
    totalCount,
    totalPages: Math.ceil(totalCount / currentLimit),
    page: currentPage,
    limit: currentLimit,
  };
};

// Get single meal
const getSingleMeal = async (mealId: string) => {
  const result = await prisma.meal.findUnique({
    where: {
      id: mealId,
    },
    include: {
      provider: true,
      category: true,
      order_items: true,
      reviews: {
        select: {
          rating: true,
          comment: true,
          customer: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
  return result;
};


export const mealService = {
  getAllMeals,
  getSingleMeal,
};
