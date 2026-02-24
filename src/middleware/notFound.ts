import { Request, Response } from "express";
import { sendResponse } from "../utils/sendResponse";

export const notFound = (req: Request, res: Response) => {
  return sendResponse({
    res,
    statusCode: 404,
    success: false,
    message: "Not Found!",
  });
};
