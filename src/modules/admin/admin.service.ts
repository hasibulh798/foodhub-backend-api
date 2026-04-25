import {
  OrderStatus,
  UserRole,
  UserStatus,
} from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

// Provider Profile Verification
const updateProviderStatus = async (
  payload: {
    isVerified: boolean;
  },
  providerId: string,
  userId: string,
) => {
  const provider = await prisma.provider_profile.findUnique({
    where: {
      id: providerId,
    },
  });
  if (!provider) {
    throw new Error("Provider not found");
  }
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (user?.role !== UserRole.ADMIN) {
    throw new Error("Forbidden!!");
  }
  const result = await prisma.provider_profile.update({
    where: {
      id: providerId,
    },
    data: {
      isVerified: payload.isVerified,
    },
  });
};

// Get All Users
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
      emailVerified: true,
      role: true,
      status: true,
      providerProfiles: {
        select: {
          id: true,
          isVerified: true,
        },
      },
    },
  });
  return users;
};

// Update User Status
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

// Delete User
const deleteUser = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }

  const result = await prisma.user.delete({
    where: {
      id: userId,
    },
  });
  return result;
};

// delete provider profile
const deleteProviderProfile = async (providerId: string, userId: string) => {
  const result = await prisma.provider_profile.delete({
    where: {
      id: providerId,
    },
  });

  return result;
};

// Dashboard Statistic
const getDashboardStats = async () => {
  const totalOrders = await prisma.order.count();

  const totalUsers = await prisma.user.count();

  const totalProviders = await prisma.provider_profile.count();

  const verifiedProviders = await prisma.provider_profile.count({
    where: { isVerified: true },
  });

  const revenueData = await prisma.order.aggregate({
    _sum: { totalAmount: true },
    where: {
      status: {
        in: [OrderStatus.DELIVERED],
      },
    },
  });
  return {
    data: {
      totalOrders,
      totalUsers,
      totalProviders,
      verifiedProviders,
      totalRevenue: revenueData._sum.totalAmount || 0,
    },
  };
};

// Update Email Verification
const updateEmailVerification = async (userId: string, isVerified: boolean) => {
  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      emailVerified: isVerified,
    },
  });
  return result;
};

export const adminService = {
  updateProviderStatus,
  getAllUsers,
  updateUserStatus,
  deleteUser,
  deleteProviderProfile,
  getDashboardStats,
  updateEmailVerification,
};
