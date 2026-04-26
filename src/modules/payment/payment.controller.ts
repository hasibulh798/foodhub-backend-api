import { Request, Response } from "express";
import * as paymentService from "./payment.service";
import { sendResponse } from "../../utils/sendResponse";

export const initiatePayment = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const userId = req.user?.id!;
    const result = await paymentService.initiatePayment(orderId as string, userId);
    sendResponse({ res, statusCode: 200, success: true, message: "Payment initiated", data: result });
  } catch (error: any) {
    sendResponse({ res, statusCode: 400, success: false, message: error.message });
  }
};

// These endpoints are called by SSLCommerz (no auth middleware)
export const paymentSuccess = async (req: Request, res: Response) => {
  try {
    const redirectUrl = await paymentService.handlePaymentSuccess(req.body);
    res.redirect(redirectUrl);
  } catch {
    res.redirect(`${process.env.FRONTEND_URL}/payment/fail`);
  }
};

export const paymentFail = async (req: Request, res: Response) => {
  const redirectUrl = await paymentService.handlePaymentFail(req.body);
  res.redirect(redirectUrl);
};

export const paymentCancel = async (req: Request, res: Response) => {
  const redirectUrl = await paymentService.handlePaymentCancel(req.body);
  res.redirect(redirectUrl);
};

export const paymentIpn = async (req: Request, res: Response) => {
  try {
    await paymentService.handlePaymentIpn(req.body);
    res.status(200).send("IPN Processed");
  } catch (error) {
    res.status(500).send("IPN Processing Failed");
  }
};