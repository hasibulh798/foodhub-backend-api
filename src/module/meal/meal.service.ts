import {
  DietaryType,
  Prisma,
  UserRole,
} from "../../../generated/prisma/client";
import { MealWhereInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";

// Create meal
const createMeal = async (
  payload: {
    categoryId: string;
    name: string;
    description: string;
    price: Prisma.Decimal;
    imageUrl: string;
  },
  userId: string,
) => {
  const { name, description, price, categoryId, imageUrl } = payload;

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

  if (provider.user?.role !== UserRole.PROVIDER) {
    throw new Error("Permission denied!");
  }
  // console.log("before result");
  // console.log(payload);
  const result = await prisma.meal.create({
    data: {
      providerId: provider.id,
      categoryId,
      name,
      description,
      price,
      imageUrl,
    },
  });

  // console.log("after result");
  // console.log(result);
  return result;
};

// Get all meals
const getAllMeals = async (filter?: {
  search?: string | undefined;
  isAvailable?: boolean | undefined;
  cuisine?: string | undefined;
  dietaryType?: DietaryType | undefined;
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
    minPrice,
    maxPrice,
    page,
    limit,
  } = filter || {};
  const currentPage = page ?? 1;
  const currentLimit = Number(limit) ?? 10;
  const skip = (currentPage - 1) * currentLimit;

  const andConditions: MealWhereInput[] = [];

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

  const result = await prisma.meal.findMany({
    where: {
      AND: andConditions,
    },
    skip,
    take: currentLimit,
    orderBy: {
      price: "asc",
    },
    // include: {
    //   order_items: {
    //     select: {
    //       orderId: true,
    //       quantity: true,
    //       price: true,
    //     },
    //   },
    //   // reviews: {
    //   //   select: {
    //   //     rating: true,
    //   //     comment: true,
    //   //     customer: {
    //   //       select: {
    //   //         name: true,
    //   //       },
    //   //     },
    //   //   },
    //   // },
    // },
  });

  return result;
};

// Get single meal
const getSingleMeal = async (mealId: string) => {
  const result = await prisma.meal.findUnique({
    where: {
      id: mealId,
    },
    // include: {
    //   order_items: true,
    //   reviews: {
    //     select: {
    //       rating: true,
    //       comment: true,
    //       customer: {
    //         select: {
    //           name: true,
    //         },
    //       },
    //     },
    //   },
    // },
  });
  return result;
};

// //Update meal
// const updateMeal = async (
//   payload: {
//     name: string;
//     description: string;
//     imageUrl: string;
//     price: Prisma.Decimal;
//     isAvailable: boolean;
//   },
//   mealId: string,
//   userId: string,
// ) => {
//   const { name, description, imageUrl, price, isAvailable } = payload;

//   const provider = await prisma.provider_profile.findUnique({
//     where: {
//       userId,
//     },
//     include: {
//       user: true,
//     },
//   });

//   if (!provider) {
//     throw new Error("You are not provider!");
//   }

//   if (provider.user?.role !== UserRole.PROVIDER) {
//     throw new Error("Permission denied!");
//   }
//   const meal = await prisma.meal.findUnique({
//     where: {
//       id: mealId,
//     },
//   });
//   if (!meal) {
//     throw new Error("Meal not found");
//   }
//   const result = await prisma.meal.update({
//     where: {
//       id: mealId,
//     },
//     data: payload,
//   });
//   return result;
// };

// // Delete meal
// const deleteMeal = async (mealId: string, userId: string) => {
//   const provider = await prisma.provider_profile.findUnique({
//     where: {
//       userId,
//     },
//     include: {
//       user: true,
//     },
//   });

//   if (provider?.user.role !== UserRole.PROVIDER) {
//     throw new Error("You are not provider!");
//   }

//   const result = await prisma.meal.delete({
//     where: {
//       id: mealId,
//     },
//   });
//   return result;
// };

export const mealService = {
  // createMeal,
  getAllMeals,
  getSingleMeal,
  // updateMeal,
  // deleteMeal,
};
