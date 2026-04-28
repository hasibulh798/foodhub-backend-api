import { sendResponse } from "../../utils/sendResponse.js";
import { providerService } from "./provider.service.js";
// Create meal
const createMeal = async (req, res) => {
    try {
        const userId = req.user?.id;
        const result = await providerService.createMeal(req.body, userId);
        return sendResponse({
            res,
            statusCode: 201,
            success: true,
            message: "Meal created successfully",
            data: result,
        });
    }
    catch (error) {
        return sendResponse({
            res,
            statusCode: 500,
            success: false,
            message: error.message || "Failed to create meal",
        });
    }
};
//Get my meals
const getMyMeals = async (req, res) => {
    try {
        const userId = req.user?.id;
        const result = await providerService.getMyMeals(userId);
        sendResponse({
            res,
            statusCode: 200,
            success: true,
            message: "My meals fetched successfully",
            data: result,
        });
    }
    catch (error) {
        sendResponse({
            res,
            statusCode: 500,
            success: false,
            message: error.message || "Failed to fetch my meals",
        });
    }
};
//Update category
const updateMeal = async (req, res) => {
    try {
        const { mealId } = req.params;
        const userId = req.user?.id;
        const result = await providerService.updateMeal(req.body, mealId, userId);
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
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to update meal",
            error: error.message,
        });
    }
};
// Delete category
const deleteMeal = async (req, res) => {
    try {
        const userId = req.user?.id;
        const { mealId } = req.params;
        const result = await providerService.deleteMeal(mealId, userId);
        return res.json({
            success: true,
            message: "Meal deleted successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to delete meal",
            error: error.message,
        });
    }
};
// Order update status
const updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const userId = req.user?.id;
        const { status } = req.body;
        const result = await providerService.updateOrderStatus(orderId, userId, status);
        sendResponse({
            res,
            statusCode: 200,
            success: true,
            message: "Order status updated successfully.",
            data: result,
        });
    }
    catch (error) {
        sendResponse({
            res,
            statusCode: 500,
            success: false,
            message: error.message || "Failed to update order status",
        });
    }
};
// Cancel Order
const cancelOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const userId = req.user?.id;
        const result = await providerService.cancelOrder(orderId, userId);
        sendResponse({
            res,
            statusCode: 200,
            success: true,
            message: "Order cancelled successfully.",
            data: result,
        });
    }
    catch (error) {
        sendResponse({
            res,
            statusCode: 500,
            success: false,
            message: error.message || "Failed to cancel order",
        });
    }
};
// Toggle meal availability
const toggleMealAvailability = async (req, res) => {
    try {
        const { mealId } = req.params;
        const userId = req.user?.id;
        const result = await providerService.toggleMealAvailability(mealId, userId);
        sendResponse({
            res,
            statusCode: 200,
            success: true,
            message: "Meal availability toggled successfully",
            data: result,
        });
    }
    catch (error) {
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
//# sourceMappingURL=provider.controller.js.map