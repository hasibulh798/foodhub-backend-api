import { UserRole, UserStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

const getAllUsers = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }
  if (user.role !== UserRole.ADMIN) {
    throw new Error("Forbidden!");
  }
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
    },
  });
  return users;
};

const updateUserStatus = async (
  adminId: string,
  userId: string,
  status: UserStatus,
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }
  const admin = await prisma.user.findUnique({
    where: {
      id: adminId,
    },
  });
  if (!admin) {
    throw new Error("Admin user not found");
  }
  if (admin.role !== UserRole.ADMIN) {
    throw new Error("Forbidden!");
  }
  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      status,
    },
  });
  return result;
};
export const authService = {
  getAllUsers,
  updateUserStatus,
};
