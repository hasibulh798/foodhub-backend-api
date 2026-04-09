import { Request, Response } from "express";
import { UserStatus } from "../../../generated/prisma/enums";
import { sendResponse } from "../../utils/sendResponse";
import { adminService } from "./admin.service";

// Provider Profile Verification
const updateProviderStatus = async (req: Request, res: Response) => {
  try {
    const { providerId } = req.params;
    const userId = req.user?.id;
    const result = await adminService.updateProviderStatus(
      req.body,
      providerId as string,
      userId as string,
    );

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Provider status updated successfully",
      data: result,
    });
  } catch (error: any) {
    return sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to Provider status updated",
    });
  }
};

// Get All User
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await adminService.getAllUsers(req.user?.id as string);

    if (!result.length) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }
    return res.json({
      success: true,
      message: "Users fetched successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};

// Update user status (active/inactive/Suspend)
const updateUserStatus = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const adminId = req.user?.id;
    const { status } = req.body;
    const result = await adminService.updateUserStatus(
      adminId as string,
      userId as string,
      status as UserStatus,
    );

    if (result === null) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.json({
      success: true,
      message: "User status updated successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to update user status",
      error: error.message,
    });
  }
};

// Delete user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const adminId = req.user?.id;
    const result = await adminService.deleteUser(userId as string);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete user",
      error: error.message,
    });
  }
};

// Delete provider profile
const deleteProviderProfile = async (req: Request, res: Response) => {
  try {
    const { providerId } = req.params;
    const userId = req.user?.id;
    const result = await adminService.deleteProviderProfile(
      providerId as string,
      userId as string,
    );

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Provider Deleted successfully",
    });
  } catch (error: any) {
    return sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to delete provider profile.",
    });
  }
};
const getDashboardStats = async (req: Request, res: Response) => {
  try {
    const result = await adminService.getDashboardStats();

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Dashboard statistic fetched successfully",
      data: result,
    });
  } catch (error: any) {
    return sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to fetch.",
    });
  }
};

export const adminController = {
  updateProviderStatus,
  getAllUsers,
  updateUserStatus,
  deleteUser,
  deleteProviderProfile,
  getDashboardStats,
};
