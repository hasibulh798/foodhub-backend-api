import { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse.js";
import { providerProfileServices } from "./providerProfile.service.js";

// create provider
const createProvider = async (req: Request, res: Response) => {
  try {
    const result = await providerProfileServices.createProvider(req.body);
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
    const { page, limit, isVerified } = req.query;
    const filter: { page?: number; limit?: number; isVerified?: boolean } = {};
    if (page) filter.page = Number(page);
    if (limit) filter.limit = Number(limit);
    if (isVerified !== undefined) filter.isVerified = isVerified === "true";

    const result = await providerProfileServices.getAllProvider(filter);

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Provider retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    return sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to retrieve Provider.",
    });
  }
};

// get single provider
const getSingleProvider = async (req: Request, res: Response) => {
  try {
    const { providerId } = req.params;
    const result = await providerProfileServices.getSingleProvider(
      providerId as string,
    );

    if (result === null) {
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

// update provider orofile
const updateProviderProfile = async (req: Request, res: Response) => {
  try {
    const { providerId } = req.params;
    const result = await providerProfileServices.updateProviderProfile(
      req.body,
      providerId as string,
    );

    return res.json({
      success: true,
      message: "Provider Profile updated successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to update provider",
      error: error.message,
    });
  }
};
// get my profile
const getMyProviderProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const result = await providerProfileServices.getMyProviderProfile(userId as string);
    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Profile retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    return sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to retrieve profile",
    });
  }
};

// update my profile
const updateMyProviderProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const result = await providerProfileServices.updateMyProviderProfile(
      userId as string,
      req.body
    );
    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Profile updated successfully",
      data: result,
    });
  } catch (error: any) {
    return sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Failed to update profile",
    });
  }
};

export const providerProfileController = {
  createProvider,
  getAllProvider,
  getSingleProvider,
  updateProviderProfile,
  getMyProviderProfile,
  updateMyProviderProfile,
};

