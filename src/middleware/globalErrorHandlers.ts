import { NextFunction, Request, Response } from "express";
import { Prisma } from "../generated/prisma/client.js";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Internal Server Error";
  let errorDetails = err;

  if (err instanceof Prisma.PrismaClientValidationError) {
    statusCode = 400;
    message = "Missing field or incorrect field type!";
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "p2025") {
      statusCode = 400;
      message =
        "An operation failed because it depends on one or more records that were required but not found";
    }
  }
  // if (err.name === "ValidationError") {
  //   statusCode = 400;
  //   message = err.message;
  // } else if (err.name === "NotFoundError") {
  //   statusCode = 404;
  //   message = err.message;
  // } else if (err.name === "UnauthorizedError") {
  //   statusCode = 401;
  //   message = err.message;
  // }

  res.status(statusCode).json({
    success: false,
    message,
    error: process.env.NODE_ENV === "development" ? errorDetails : undefined,
  });
};
export default errorHandler;