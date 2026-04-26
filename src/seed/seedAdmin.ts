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
      console.log("Admin already exists");
      return;
    }
    const betterAuthUrl = process.env.BETTER_AUTH_URL || "http://localhost:5000";
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
    
    const response = await fetch(
      `${betterAuthUrl}/api/auth/sign-up/email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: frontendUrl,
        },
        body: JSON.stringify(adminData),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to create admin: ${errorText}`);
    }
    await prisma.user.update({
      where: {
        email: adminData.email,
      },
      data: {
        emailVerified: true,
      },
    });
    console.log("Admin seeded successfully");
  } catch (error: any) {
    console.error("Error seeding admin:", error);
    process.exit(1);
  }
};
seedAdmin();
