import { prisma } from "../../lib/prisma";

// Create category
const createCategory = async (payload: { name: string }) => {
  if (!payload.name) {
    throw new Error("All field id required!");
  }
  const result = await prisma.category.create({
    data: {
      name: payload.name,
    },
  });

  return result;
};

// Get all category
const getAllCategory = async () => {
  const result = await prisma.category.findMany({
    include: {
      meals: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
  return result;
};

// Get single category
const getSingleCategory = async (catId: string, userId: string) => {
  console.log(catId, userId);
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user?.role === "CUSTOMER") {
    throw new Error("You don't have permission to access this resource.");
  }
  const result = await prisma.category.findUnique({
    where: {
      id: catId,
    },
  });
  console.log(result);
  return result;
};

// //Update category
// const updateCategory = async (
//   payload: { name: string },
//   catId: string,
//   userId: string,
// ) => {
//   const user = await prisma.user.findUnique({ where: { id: userId } });
//   if (user?.role !== "ADMIN") {
//     throw new Error("Permission denied!");
//   }

//   const result = await prisma.category.update({
//     where: {
//       id: catId,
//     },
//     data: {
//       name: payload.name,
//     },
//   });

//   return result;
// };

// // Delete category
// const deleteCategory = async (catId: string, userId: string) => {
//   const user = await prisma.user.findUnique({ where: { id: userId } });
//   if (user?.role !== "ADMIN") {
//     throw new Error("Permission denied!");
//   }

//   const result = await prisma.category.delete({
//     where: {
//       id: catId,
//     },
//   });
//   return result;
// };

export const categoryService = {
  createCategory,
  getAllCategory,
  getSingleCategory,
  // updateCategory,
  // deleteCategory,
};
