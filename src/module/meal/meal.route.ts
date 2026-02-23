import { Router } from "express";

import { UserRole } from "../../../generated/prisma/enums";
import { auth } from "../../middleware/auth";
import { mealController } from "./meal.controller";
// import { reviewRoutes } from "../review/review.route";

const router = Router();

// create provider
// router.post("/create", auth(UserRole.PROVIDER), mealController.createMeal);
router.get("/", mealController.getAllMeals);
// router.get("/:mealId", mealController.getSingleMeal);

// router.use("/:mealId/reviews", reviewRoutes);
export const mealRoutes = router;
