import { Router } from "express";
import { UserRole } from "@prisma/client";
import { auth } from "../../middleware/auth.js";
import { providerController } from "./provider.controller.js";

const router = Router();



//Get my meal
router.get("/my-meals", auth(UserRole.PROVIDER), providerController.getMyMeals);

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
router.patch(
  "/meals/:mealId/toggle",
  auth(UserRole.PROVIDER),
  providerController.toggleMealAvailability,
);


//Order specific

// Update Order Status
router.patch(
  "/orders/:orderId/status",
  auth(UserRole.ADMIN, UserRole.PROVIDER),
  providerController.updateOrderStatus,
);



export const ProviderRoutes = router;
