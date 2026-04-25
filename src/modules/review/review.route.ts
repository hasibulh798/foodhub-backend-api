import { Router } from "express";
import { UserRole } from "../../../generated/prisma/enums";
import { auth } from "../../middleware/auth";
import { reviewController } from "./review.controller";

const router = Router();

// Get public reviews for homepage
router.get("/public", reviewController.getPublicReviews);

// Create a review for a meal
router.post("/", auth(UserRole.CUSTOMER), reviewController.createReview);

// Get all reviews for a user
router.get(
  "/",
  auth(UserRole.CUSTOMER, UserRole.PROVIDER, UserRole.ADMIN),
  reviewController.getAllReviews,
);
// Get all reviews for a meal
router.get("/meal/:mealId", reviewController.getMealReviews);

//Delete a review
router.delete(
  "/:reviewId",
  auth(UserRole.CUSTOMER, UserRole.ADMIN),
  reviewController.deleteReview,
);

export const reviewRoutes = router;
