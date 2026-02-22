import { Response } from "express";
import { error } from "node:console";

type SendResponseType = {
  res: Response;
  statusCode: number;
  success: boolean;
  message: string;
  data?: any;
  error?: any;
};

export const sendResponse = ({
  res,
  statusCode,
  success,
  message,
  data,
}: SendResponseType) => {
  return res.status(statusCode).json({
    success,
    message,
    data,
    error,
  });
};
