import { Router } from "express";
import { UserRole } from "../../generated/prisma/client.js";
import { auth } from "../../middleware/auth.js";
import { categoryController } from "./categories.controller.js";

const router = Router();

// create provider
router.post("/", auth(UserRole.ADMIN), categoryController.createCategory);
router.get("/", categoryController.getAllCategory);
router.get(
  "/provider/:providerId",

  categoryController.getProvidersCategory,
);
router.get(
  "/:catId",
  auth(UserRole.ADMIN, UserRole.PROVIDER),
  categoryController.getSingleCategory,
);
router.patch(
  "/:catId",
  auth(UserRole.ADMIN),
  categoryController.updateCategory,
);
router.delete(
  "/:catId",
  auth(UserRole.ADMIN),
  categoryController.deleteCategory,
);

export const categoryRoutes = router;
