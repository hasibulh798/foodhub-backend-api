import { prisma } from "../lib/prisma";
import { userRoles } from "../types";

const seedAdmin = async () => {
  try {
    const adminData = {
      name: process.env.ADMIN_NAME!,
      email: process.env.ADMIN_EMAIL!,
      password: process.env.ADMIN_PASSWORD!,
      role: userRoles.ADMIN!,
      phone: process.env.ADMIN_PHONE!,
    };
    const existingAdmin = await prisma.user.findUnique({
      where: {
        email: adminData.email,
      },
    });
    if (existingAdmin) {
      throw new Error("Admin already exists");
    }
    const response = await fetch(
      "http://localhost:5000/api/auth/sign-up/email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "http://localhost:3000",
        },
        body: JSON.stringify(adminData),
      },
    );
    console.log("Admin seeding response status:", response);
    if (!response.ok) {
      throw new Error("Failed to create admin");
    }
    const emailVerificatiom = await prisma.user.update({
      where: {
        email: adminData.email,
      },
      data: {
        emailVerified: true,
      },
    });
  } catch (error) {
    console.error("Error seeding admin:", error);
  }
}
seedAdmin();
