import { Router } from "express";
import { UserRole } from "@prisma/client";
import { auth } from "../../middleware/auth.js";
import { adminController } from "./admin.controller.js";

const router = Router();

// get all users
router.get("/users", auth(UserRole.ADMIN), adminController.getAllUsers);

//update user status
router.patch(
  "/users/:userId",
  auth(UserRole.ADMIN),
  adminController.updateUserStatus,
);

//verify provider
router.patch(
  "/verify-provider/:providerId",
  auth(UserRole.ADMIN),
  adminController.updateProviderStatus,
);

// verify user email manually
router.patch(
    "/verify-email/:userId",
    auth(UserRole.ADMIN),
    adminController.updateEmailVerification,
)

// Provider deletion
router.delete(
  "/users/:userId",
  auth(UserRole.ADMIN),
  adminController.deleteUser,
);

// Provider deletion
router.delete(
  "/providers/:providerId",
  auth(UserRole.ADMIN),
  adminController.deleteProviderProfile,
);

// dashboard stats
router.get("/dashboard-stats", adminController.getDashboardStats);

export const adminRoutes = router;
