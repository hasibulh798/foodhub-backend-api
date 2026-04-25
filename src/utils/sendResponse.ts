import { Response } from "express";

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
  error,
}: SendResponseType) => {
  return res.status(statusCode).json({
    success,
    message,
    data,
    error,
  });
};
