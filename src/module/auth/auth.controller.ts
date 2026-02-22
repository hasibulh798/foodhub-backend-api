import { Request, Response } from "express";
import { UserStatus } from "../../../generated/prisma/enums";
import { authService } from "./auth.service";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await authService.getAllUsers(req.user?.id as string);

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
}

// Update user status (active/inactive)
const updateUserStatus = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const adminId = req.user?.id;
    const { status } = req.body;
    const result = await authService.updateUserStatus(
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

export const authController = {
  getAllUsers,
  updateUserStatus,
};
