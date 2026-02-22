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
      meals: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return result;
};

export const providerServices = {
  createProvider,
  getAllProvider,
};
