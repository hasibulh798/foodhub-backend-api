import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { OrderStatus, PaymentStatus } from "../../../generated/prisma/enums";

const handleSuccess = async (req: Request, res: Response) => {
  const { tran_id } = req.query;

  if (!tran_id) {
    return res.redirect(`${process.env.FRONTEND_URL}/payment/fail`);
  }

  try {
    await prisma.order.update({
      where: { transactionId: tran_id as string },
      data: {
        paymentStatus: PaymentStatus.PAID,
        status: OrderStatus.CONFIRMED,
      },
    });

    res.redirect(`${process.env.FRONTEND_URL}/payment/success?tran_id=${tran_id}`);
  } catch (error) {
    res.redirect(`${process.env.FRONTEND_URL}/payment/fail`);
  }
};

const handleFail = async (req: Request, res: Response) => {
  const { tran_id } = req.query;

  if (tran_id) {
    await prisma.order.update({
      where: { transactionId: tran_id as string },
      data: {
        paymentStatus: PaymentStatus.FAILED,
      },
    });
  }

  res.redirect(`${process.env.FRONTEND_URL}/payment/fail`);
};

const handleCancel = async (req: Request, res: Response) => {
  const { tran_id } = req.query;

  if (tran_id) {
    await prisma.order.update({
      where: { transactionId: tran_id as string },
      data: {
        paymentStatus: PaymentStatus.CANCELLED,
      },
    });
  }

  res.redirect(`${process.env.FRONTEND_URL}/payment/cancel`);
};

const handleIPN = async (req: Request, res: Response) => {
  // IPN handling logic for real-time background status updates
  const data = req.body;
  if (data.status === "VALID") {
    await prisma.order.update({
      where: { transactionId: data.tran_id },
      data: {
        paymentStatus: PaymentStatus.PAID,
        status: OrderStatus.CONFIRMED,
      },
    });
  }
  res.status(200).send("IPN Received");
};

export const paymentController = {
  handleSuccess,
  handleFail,
  handleCancel,
  handleIPN,
};
