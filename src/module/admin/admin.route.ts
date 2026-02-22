import { Router } from "express";
import { UserRole } from "../../../generated/prisma/enums";
import { auth } from "../../middleware/auth";
import { adminController } from "./admin.controller";

const router = Router();

router.patch(
  "/verify-provider/:providerId",
  auth(UserRole.ADMIN),
  adminController.updateProviderStatus,
);
router.get("/users", auth(UserRole.ADMIN), adminController.getAllUsers);
router.patch(
  "/users/:userId",
  auth(UserRole.ADMIN),
  adminController.updateUserStatus,
);
router.delete(
  "/providers/:providerId",
  auth(UserRole.ADMIN),
  adminController.deleteProviderProfile,
);
export const adminRoutes = router;
