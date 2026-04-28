import { Request, Response } from "express";
import { auth } from "../../lib/auth.js";
import { sendResponse } from "../../utils/sendResponse.js";

const getProfile = async (req: Request, res: Response) => {
  try {
    const session = await auth.api.getSession({
      headers: req.headers as any,
    });
    if (!session || !session.user) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized!",
      });
    }
    if (session.user.emailVerified === false) {
      return res.status(403).send({
        success: false,
        message: "Please verify your email to access this resource",
      });
    }
    sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Fetched profile successfully",
      data: req.user,
    });
  } catch (error: any) {
    sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Internal server error",
    });
  }
};
export const authController = {
  getProfile,
};
