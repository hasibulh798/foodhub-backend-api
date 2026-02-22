import { Request, Response } from "express";
import { OrderStatus } from "../../../generated/prisma/enums";
import { sendResponse } from "../../utils/sendResponse";
import { providerService } from "./provider.service";

const createMeal = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const result = await providerService.createMeal(req.body, userId as string);

    return res.json({
      success: true,
      message: "Meal created successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to create meal",
      error: error.message,
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
export const providerController = {
  createMeal,
  updateMeal,
  deleteMeal,
  updateOrderStatus,
  cancelOrder,
};
