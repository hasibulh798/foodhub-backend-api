import { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { orderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
   
    const result = await orderService.createOrder(req.body, userId as string);

    sendResponse({
      res,
      statusCode: 201,
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error: Error | any) {
    sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to create order",
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const result = await orderService.getAllOrders(userId as string);

    if (!result.length) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "No order found",
      });
    }

    sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Orders fetched successfully",
      data: result,
    });
  } catch (err: Error | any) {
    sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: "Failed to fetch Orders",
    });
  }
};

const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const userId = req.user?.id;
    const result = await orderService.getSingleOrder(
      orderId as string,
      userId as string,
    );

    sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Order fetched successfully",
      data: result,
    });
  } catch (error: Error | any) {
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
const cancelOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const userId = req.user?.id;
    const result = await orderService.cancelOrder(
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
