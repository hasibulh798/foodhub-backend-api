import { Router } from "express";

import { reviewRoutes } from "../review/review.route.js";
import { mealController } from "./meal.controller.js";
// import { reviewRoutes } from "../review/review.route.js";

const router = Router();

// create provider
// router.post("/create", auth(UserRole.PROVIDER), mealController.createMeal);
router.get("/", mealController.getAllMeals);
router.get("/:mealId", mealController.getSingleMeal);

router.use("/:mealId/reviews", reviewRoutes);
export const mealRoutes = router;
