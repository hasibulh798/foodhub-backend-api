import { Request, Response } from "express";
import { mealService } from "./meal.service";


// Meal creation
// const createMeal = async (req: Request, res: Response) => {
//   try {
//     const userId = req.user?.id;
//     const result = await mealService.createMeal(req.body, userId as string);

//     return res.json({
//       success: true,
//       message: "Meal created successfully",
//       data: result,
//     });
//   } catch (error: any) {
//     return res.status(500).json({
//       success: false,
//       message: "Failed to create meal",
//       error: error.message,
//     });
//   }
// };

// //Get All Category
const getAllMeals = async (req: Request, res: Response) => {
  try {
    const { search, isAvailable } = req.query;
    const searchString = search ? (search as string) : undefined;
    const parsedIsAvailable = isAvailable === "true" ? true : isAvailable === "false" ? false : undefined;
    
    const result = await mealService.getAllMeals(
      { search: searchString, isAvailable: parsedIsAvailable } as any,);

    if (result === null) {
      return res.status(404).json({
        success: false,
        message: "Meal not found",
      });
    }
    return res.json({
      success: true,
      message: "Meal fetched successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch meal",
      error: error.message,
    });
  }
};

// // Get a single category
// const getSingleMeal = async (req: Request, res: Response) => {
//   try {
//     const { mealId } = req.params;
//     const result = await mealService.getSingleMeal(mealId as string);

//     if (result === null) {
//       return res.status(404).json({
//         success: false,
//         message: "Meal not found",
//       });
//     }
//     return res.json({
//       success: true,
//       message: "Meal retrieved successfully",
//       data: result,
//       totalOrders: result.order_items.length,
//       totalReviews: result.reviews.length,
//      averageRating: result.reviews.length > 0 ? result.reviews.reduce((acc, review) => acc + review.rating, 0) / result.reviews.length : null,  
//     });
//   } catch (error: any) {
//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch meal.",
//       error: error.message,
//     });
//   }
// };

// //Update category
// const updateMeal = async (req: Request, res: Response) => {
//   try {
//     const { mealId } = req.params;
// const userId = req.user?.id;
//     const result = await mealService.updateMeal(req.body, mealId as string, userId as string);

//     if (result === null) {
//       return res.status(404).json({
//         success: false,
//         message: "provider not found",
//       });
//     }
//     return res.json({
//       success: true,
//       message: "Meal updated successfully",
//       data: result,
//     });
//   } catch (error: any) {
//     return res.status(500).json({
//       success: false,
//       message: "Failed to update meal",
//       error: error.message,
//     });
//   }
// };

// // Delete category
// const deleteMeal = async (req: Request, res: Response) => {
//   try {
//     const userId = req.user?.id;
//     const { mealId } = req.params;
//     const result = await mealService.deleteMeal(
//       mealId as string,
//       userId as string,
//     );

//     return res.json({
//       success: true,
//       message: "Meal deleted successfully",
//     });
//   } catch (error: any) {
//     return res.status(500).json({
//       success: false,
//       message: "Failed to delete meal",
//       error: error.message,
//     });
//   }
// };

export const mealController = {
  // createMeal,
  getAllMeals,
  // getSingleMeal,
  // updateMeal,
  // deleteMeal,
};
