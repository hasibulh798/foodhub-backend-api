import { Prisma, UserRole } from "../../../generated/prisma/client";
import { MealWhereInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";

// Create category
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

// // Get all category
const getAllMeals = async (payload?: {
  search?: string | undefined;
  isAvailable?: boolean | undefined;
}) => {
  const { search, isAvailable } = payload || {};
  const andConditions: MealWhereInput[] = [];

  if (search) {
    andConditions.push({
      OR: [
        {
          name: {
            contains: payload?.search as string,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: payload?.search as string,
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
  const result = await prisma.meal.findMany({
    where: {
      AND: andConditions,
    },
    include: {
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

  return result;
};

// // Get single category
// const getSingleMeal = async (mealId: string) => {
//   const result = await prisma.meal.findUnique({
//     where: {
//       id: mealId,
//     },
//     include: {
//       order_items: true,
//       reviews: {
//         select: {
//           rating: true,
//           comment: true,
//           customer: {
//             select: {
//               name: true,
//             },
//           },
//         },
//       },
//     },
//   });
//   return result;
// };

// //Update category
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

// // Delete category
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
  // getSingleMeal,
  // updateMeal,
  // deleteMeal,
};
