import { Router } from "express";
import { UserRole } from "../../../generated/prisma/client";
import { auth } from "../../middleware/auth";
import { providerController } from "./provider.controller";

const router = Router();



//Get my meal
router.get("/meals/my-meals", auth(UserRole.PROVIDER), providerController.getMyMeals);

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
