import { Router } from "express";
import { UserRole } from "../../../generated/prisma/client";
import { auth } from "../../middleware/auth";
import { providerController } from "./provider.controller";

const router = Router();

router.post(
  "/meals",
  auth(UserRole.PROVIDER),
  providerController.createMeal,
);
router.put(
  "/meals/:mealId",
  auth(UserRole.ADMIN, UserRole.PROVIDER),
  providerController.updateMeal,
);
router.delete(
  "/meals/:mealId",
  auth(UserRole.ADMIN, UserRole.PROVIDER),
  providerController.deleteMeal,
);

//Order specific

// Update Order Status
router.patch(
  "/orders/:orderId/status",
  auth(UserRole.ADMIN, UserRole.PROVIDER),
  providerController.updateOrderStatus,
);



export const ProviderRoutes = router;
