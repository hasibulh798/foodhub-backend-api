import { UserRole } from "../../generated/prisma/client.js";
import { auth } from "../../lib/auth.js";
import { prisma } from "../../lib/prisma.js";

// create Provider
const createProvider = async (payload: {
  name: string;
  email: string;
  password: string;
  phone?: string;
  businessName: string;
  address: string;
  logoUrl?: string;
  deliveryFee?: number;
}) => {
  const {
    name,
    email,
    password,
    phone,
    businessName,
    address,
    logoUrl,
    deliveryFee,
  } = payload;

  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      providerProfiles: true,
    },
  });

  if (user && !user.providerProfiles) {
    const providerProfile = await prisma.provider_profile.create({
      data: {
        businessName,
        address,
        logoUrl: logoUrl || null,
        deliveryFee: deliveryFee || 60,
        userId: user.id,
      },
    });

    return providerProfile;
  } else {
    const createdUser = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
        phone,
        role: UserRole.PROVIDER,
      },
    });
    let userId;

    userId = createdUser.user.id;

    const providerProfile = await prisma.provider_profile.create({
      data: {
        businessName,
        address,
        logoUrl: logoUrl || null,
        deliveryFee: deliveryFee || 60,
        userId,
      },
    });

    return providerProfile;
  }
};

// get all providers
const getAllProvider = async (filter?: { 
  page?: number; 
  limit?: number;
  isVerified?: boolean;
}) => {
  const { page, limit, isVerified } = filter || {};
  const currentPage = Number(page) || 1;
  const currentLimit = Number(limit) || 10;
  const skip = (currentPage - 1) * currentLimit;

  const where: any = {};
  if (isVerified !== undefined) {
    where.isVerified = isVerified;
  }

  const totalCount = await prisma.provider_profile.count({ where });

  const data = await prisma.provider_profile.findMany({
    where,
    skip,
    take: currentLimit,
    include: {
      _count: {
        select: {
          meals: true,
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

// get single provider
const getSingleProvider = async (providerId: string) => {
  const provider = await prisma.provider_profile.findUnique({
    where: { id: providerId },
    include:{
      meals:true
    }
  });

  if (!provider) return null;

  const totalMeals = await prisma.meal.count({
    where: { providerId },
  });

  const totalOrder = await prisma.order.count({
    where: {
      providerId,
    },
  });

  const ratingData = await prisma.review.aggregate({
    _avg: {
      rating: true,
    },
    _count: {
      rating: true,
    },
    where: {
      meal: {
        providerId: providerId,
      },
    },
  });

  const averageRating = ratingData._avg.rating ?? 0;
  const totalReviews = ratingData._count.rating ?? 0;

  return {
    provider,
    totalMeals,
    totalOrder,
    averageRating: Number(averageRating.toFixed(1)),
    totalReviews,
  };
};

// updateProviderProfile
const updateProviderProfile = async (
  payload: {
    businessName: string;
    address: string;
    logoUrl: string;
    deliveryFee?: number;
  },
  providerId: string,
) => {
  const { businessName, address, logoUrl, deliveryFee } = payload;
  const provider = await prisma.provider_profile.findUnique({
    where: {
      id: providerId,
    },
  });
  if (!provider) {
    throw new Error("Provider not found");
  }
  const result = await prisma.provider_profile.update({
    where: {
      id: providerId,
    },
    data: {
      businessName,
      address,
      logoUrl,
      deliveryFee: deliveryFee !== undefined ? deliveryFee : 60,
    },
  });
  return result;
};

// update my profile
const updateMyProviderProfile = async (
  userId: string,
  payload: {
    businessName?: string;
    address?: string;
    logoUrl?: string;
    deliveryFee?: number;
  },
) => {
  const profile = await prisma.provider_profile.findUnique({
    where: { userId },
  });
  if (!profile) {
    throw new Error("Provider profile not found");
  }
  const result = await prisma.provider_profile.update({
    where: { id: profile.id },
    data: payload,
  });
  return result;
};


// get my profile
const getMyProviderProfile = async (userId: string) => {
  const profile = await prisma.provider_profile.findUnique({
    where: { userId },
  });
  return profile;
};

export const providerProfileServices = {
  createProvider,
  getAllProvider,
  getSingleProvider,
  updateProviderProfile,
  getMyProviderProfile,
  updateMyProviderProfile,
};


