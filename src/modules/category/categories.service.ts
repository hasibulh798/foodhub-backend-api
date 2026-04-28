import { prisma } from "../../lib/prisma.js";

// Create category
const createCategory = async (payload: { name: string; iconUrl?: string }) => {
  if (!payload.name || !payload.iconUrl) {
    throw new Error("All fields are required!");
  }
  const result = await prisma.category.create({
    data: {
      name: payload.name,
      iconUrl: payload.iconUrl,
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

//Get Providers category
const getProvidersCategory = async (providerId: string) => {
  const provider = await prisma.provider_profile.findUnique({
    where: {
      id: providerId,
    },
  });
  if (!provider) {
    throw new Error("Provider not found");
  }
  const result = await prisma.category.findMany({
    where: {
      meals: {
        some: {
          providerId: provider.id,
        },
      },
    },
  });
  return result;
};

//Update category
const updateCategory = async (
  payload: { name?: string; isActive?: boolean; iconUrl?: string },
  catId: string,
  userId: string,
) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== "ADMIN") {
    throw new Error("Permission denied!");
  }

  const result = await prisma.category.update({
    where: {
      id: catId,
    },
    data: {
      ...payload
    },
  });

  return result;
};

// Delete category
const deleteCategory = async (catId: string, userId: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== "ADMIN") {
    throw new Error("Permission denied!");
  }

  const result = await prisma.category.delete({
    where: {
      id: catId,
    },
  });
  return result;
};

export const categoryService = {
  createCategory,
  getAllCategory,
  getSingleCategory,
  getProvidersCategory,
  updateCategory,
  deleteCategory,
};
