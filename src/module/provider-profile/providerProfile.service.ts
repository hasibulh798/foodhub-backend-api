import { UserRole } from "../../../generated/prisma/enums";
import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";

// create Provider
const createProvider = async (payload: {
  name: string;
  email: string;
  password: string;
  phone?: string;
  businessName: string;
  address: string;
  logoUrl?: string;
}) => {
  const { name, email, password, phone, businessName, address, logoUrl } =
    payload;

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
        userId,
      },
    });
    console.log(providerProfile);
    return providerProfile;
  }
};

// get all providers
const getAllProvider = async () => {
  const result = await prisma.provider_profile.findMany({
    include: {
      _count: {
        select: {
          meals: true,
        },
      },
    },
  });

  return result;
};

// get single provider
const getSingleProvider = async (providerId: string) => {
  const provider = await prisma.provider_profile.findUnique({
    where: {
      id: providerId,
    },
    include: {
      meals: true,
      orders: {
        include: {
          reviews: true,
        },
      },
    },
  });

  return {
    provider,
    totalMeals: provider?.meals.length,
    totalOrder: provider?.orders.length,
  };
};

// updateProviderProfile
const updateProviderProfile = async (
  payload: {
    businessName: string;
    address: string;
    logoUrl: string;
  },
  providerId: string,
) => {
  const { businessName, address, logoUrl } = payload;
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
    },
  });
  return result;
};





export const providerProfileServices = {
  createProvider,
  getAllProvider,
  getSingleProvider,
  updateProviderProfile,
};
