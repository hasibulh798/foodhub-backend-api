import { Request, Response } from "express";
import { OrderStatus } from "../../../generated/prisma/enums";
import { sendResponse } from "../../utils/sendResponse";
import { providerService } from "./provider.service";





// Create meal
const createMeal = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const result = await providerService.createMeal(req.body, userId as string);

    return sendResponse({
      res,
      statusCode: 201,
      success: true,
      message: "Meal created successfully",
      data: result,
    });
  } catch (error: any) {
    return sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to create meal",
    });
  }
};

//Get my meals
const getMyMeals = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const result = await providerService.getMyMeals(userId as string);
    sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "My meals fetched successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to fetch my meals",
    });
  }
};  

//Update category
const updateMeal = async (req: Request, res: Response) => {
  try {
    const { mealId } = req.params;
    const userId = req.user?.id;
    const result = await providerService.updateMeal(
      req.body,
      mealId as string,
      userId as string,
    );

    if (result === null) {
      return res.status(404).json({
        success: false,
        message: "provider not found",
      });
    }
    return res.json({
      success: true,
      message: "Meal updated successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to update meal",
      error: error.message,
    });
  }
};

// Delete category
const deleteMeal = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { mealId } = req.params;
    const result = await providerService.deleteMeal(
      mealId as string,
      userId as string,
    );

    return res.json({
      success: true,
      message: "Meal deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete meal",
      error: error.message,
    });
  }
};

// Order update status
const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const userId = req.user?.id;
    const { status } = req.body;
    const result = await providerService.updateOrderStatus(
      orderId as string,
      userId as string,
      status as OrderStatus,
    );

    sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Order status updated successfully.",
      data: result,
    });
  } catch (error: Error | any) {
    sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to update order status",
    });
  }
};

// Cancel Order
const cancelOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const userId = req.user?.id;
    const result = await providerService.cancelOrder(
      orderId as string,
      userId as string,
    );

    sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Order cancelled successfully.",
      data: result,
    });
  } catch (error: Error | any) {
    sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to cancel order",
    });
  }
};
// Toggle meal availability
const toggleMealAvailability = async (req: Request, res: Response) => {
  try {
    const { mealId } = req.params;
    const userId = req.user?.id;
    const result = await providerService.toggleMealAvailability(
      mealId as string,
      userId as string,
    );

    sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Meal availability toggled successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to toggle meal availability",
    });
  }
};

export const providerController = {
  createMeal,
  getMyMeals,
  updateMeal,
  deleteMeal,
  updateOrderStatus,
  cancelOrder,
  toggleMealAvailability,
};

