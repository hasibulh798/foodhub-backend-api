import { sendResponse } from "../../utils/sendResponse.js";
import { orderService } from "./order.service.js";
const createOrder = async (req, res) => {
    try {
        const userId = req.user?.id;
        const result = await orderService.createOrder(req.body, userId);
        sendResponse({
            res,
            statusCode: 201,
            success: true,
            message: "Order created successfully",
            data: result,
        });
    }
    catch (error) {
        sendResponse({
            res,
            statusCode: 500,
            success: false,
            message: error.message || "Failed to create order",
        });
    }
};
const getAllOrders = async (req, res) => {
    try {
        const userId = req.user?.id;
        const result = await orderService.getAllOrders(userId);
        sendResponse({
            res,
            statusCode: 200,
            success: true,
            message: "Orders fetched successfully",
            data: result,
        });
    }
    catch (err) {
        sendResponse({
            res,
            statusCode: 500,
            success: false,
            message: "Failed to fetch Orders",
        });
    }
};
const getSingleOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const userId = req.user?.id;
        const result = await orderService.getSingleOrder(orderId, userId);
        sendResponse({
            res,
            statusCode: 200,
            success: true,
            message: "Order fetched successfully",
            data: result,
        });
    }
    catch (error) {
        sendResponse({
            res,
            statusCode: 500,
            success: false,
            message: error.message || "Failed to fetch order",
        });
    }
};
// const updateOrderStatus = async (req: Request, res: Response) => {
//   try {
//     const { orderId } = req.params;
//     const userId = req.user?.id;
//     const { status } = req.body;
//     const result = await orderService.updateOrderStatus(
//       orderId as string,
//       userId as string,
//       status as OrderStatus,
//     );
//     sendResponse({
//       res,
//       statusCode: 200,
//       success: true,
//       message: "Order status updated successfully.",
//       data: result,
//     });
//   } catch (error: Error | any) {
//     sendResponse({
//       res,
//       statusCode: 500,
//       success: false,
//       message: error.message || "Failed to update order status",
//     });
//   }
// };
// Cancel Order
const cancelOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const userId = req.user?.id;
        const result = await orderService.cancelOrder(orderId, userId);
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
// Delete Order
// const deleteOrder = async (req: Request, res: Response) => {
//   try {
//     const { orderId } = req.params;
//     const userId = req.user?.id;
//     const result = await orderService.deleteOrder(
//       orderId as string,
//       userId as string,
//     );
//     sendResponse({
//       res,
//       statusCode: 200,
//       success: true,
//       message: "Order deleted successfully",
//     });
//   } catch (error: any) {
//     sendResponse({
//       res,
//       statusCode: 200,
//       success: true,
//       message: error.message || "Failed to delete order",
//     });
//   }
// };
export const orderController = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    // updateOrderStatus,
    cancelOrder,
    // deleteOrder,
};
//# sourceMappingURL=order.controller.js.map