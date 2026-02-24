import { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { reviewService } from "./review.service";

const createReview = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const result = await reviewService.createReview(req.body, userId as string);
    sendResponse({
      res,
      statusCode: 201,
      success: true,
      message: "Review created successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to create review",
    });
  }
};

const getAllReviews = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const result = await reviewService.getAllReviews(userId as string);
    sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "All reviews retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to get all reviews",
    });
  }
};

//Get all reviews for a meal
// const getMealReviews = async (req: Request, res: Response) => {
//   try {
//     const mealId = req.params.mealId;
//     const result = await reviewService.getMealReviews(mealId as string);

//     if (!result.length) {
//       return sendResponse({
//         res,
//         statusCode: 404,
//         success: false,
//         message: "No reviews found for this meal",
//       });
//     }
//     res.status(200).json({
//       success: true,
//       message: "Reviews for the meal retrieved successfully",
//       data: result,
//       totalReviews: result.length,
//     });
//   } catch (error: any) {
//     sendResponse({
//       res,
//       statusCode: 500,
//       success: false,
//       message: error.message || "Failed to get meal reviews",
//     });
//   }
// };

//Delete review
// const deleteReview = async (req: Request, res: Response) => {
//   try {
//     const reviewId = req.params.reviewId;
//     const userId = req.user?.id;
//     const result = await reviewService.deleteReview(
//       reviewId as string,
//       userId as string,
//     );

//     if (result === null) {
//       return sendResponse({
//         res,
//         statusCode: 404,
//         success: false,
//         message:
//           "Review not found or you are not authorized to delete this review",
//       });
//     }
//     sendResponse({
//       res,
//       statusCode: 200,
//       success: true,
//       message: "Review deleted successfully",
//     });
//   } catch (error: any) {
//     sendResponse({
//       res,
//       statusCode: 500,
//       success: false,
//       message: "Failed to delete review",
//     });
//   }
// };
export const reviewController = {
  createReview,
  getAllReviews,
  // getMealReviews,
  // deleteReview
};
