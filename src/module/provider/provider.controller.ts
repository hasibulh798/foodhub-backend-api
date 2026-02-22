import { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { providerServices } from "./provider.service";

// create provider
const createProvider = async (req: Request, res: Response) => {
  try {
    const result = await providerServices.createProvider(req.body);
    if (!result) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Provider not found",
      });
    }
    return sendResponse({
      res,
      statusCode: 201,
      success: true,
      message: "Provider created successfully",
      data: result,
    });
  } catch (error: any) {
    return sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to create Provider.",
    });
  }
};

//Get all provider

const getAllProvider = async (req: Request, res: Response) => {
  try {
    const result = await providerServices.getAllProvider();

    if (result.length === 0) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Provider not found",
      });
    }
    return sendResponse({
      res,
      statusCode: 201,
      success: true,
      message: "Provider retrived successfully",
      data: result,
    });
  } catch (error: any) {
    return sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to retrived Provider.",
    });
  }
};

export const providerController = {
  createProvider,
  getAllProvider,
};
