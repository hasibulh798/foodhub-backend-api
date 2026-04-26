import SSLCommerzPayment from "sslcommerz-lts";
import { prisma } from "../../lib/prisma";
import { OrderStatus, PaymentMethod, PaymentStatus } from "../../../generated/prisma/enums";

const isLive = process.env.SSL_IS_LIVE === "true";

/**
 * Compatibility function for existing order.service.ts
 */
const initPayment = async (paymentData: {
  total_amount: number;
  tran_id: string;
  cus_name: string;
  cus_email: string;
  cus_phone: string;
  cus_add1: string;
  product_name: string;
}) => {
  try {
    const sslcz = new SSLCommerzPayment(
      process.env.STORE_ID!,
      process.env.STORE_PASS!,
      isLive
    );

    const backendUrl = process.env.BACKEND_URL || process.env.BETTER_AUTH_URL;

    const data = {
      total_amount: paymentData.total_amount,
      currency: "BDT",
      tran_id: paymentData.tran_id,
      success_url: `${backendUrl}/api/payment/success`,
      fail_url: `${backendUrl}/api/payment/fail`,
      cancel_url: `${backendUrl}/api/payment/cancel`,
      ipn_url: `${backendUrl}/api/payment/ipn`,
      shipping_method: "NO",
      product_name: paymentData.product_name,
      product_category: "Food",
      product_profile: "general",
      cus_name: paymentData.cus_name,
      cus_email: paymentData.cus_email,
      cus_add1: paymentData.cus_add1,
      cus_city: "Dhaka",
      cus_country: "Bangladesh",
      cus_phone: paymentData.cus_phone,
      ship_name: paymentData.cus_name,
      ship_add1: paymentData.cus_add1,
      ship_city: "Dhaka",
      ship_country: "Bangladesh",
    };

    const apiResponse = await sslcz.init(data);
    if (apiResponse?.GatewayPageURL) {
      return apiResponse.GatewayPageURL;
    } else {
      throw new Error("Failed to initiate payment gateway");
    }
  } catch (error: any) {
    throw new Error(error.message || "SSLCommerz Error");
  }
};

/**
 * New implementation that takes orderId and userId
 */
export const initiatePayment = async (orderId: string, userId: string) => {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: { customer: true, orderItems: { include: { meal: true } } },
  });

  if (!order) throw new Error("Order not found");
  if (order.customerId !== userId) throw new Error("Forbidden");
  if (order.paymentMethod !== PaymentMethod.ONLINE)
    throw new Error("This order uses Cash on Delivery");
  if (order.paymentStatus === "PAID") throw new Error("Order already paid");

  const transactionId = `TXN-${orderId}-${Date.now()}`;

  // Save transactionId to order
  await prisma.order.update({
    where: { id: orderId },
    data: { transactionId },
  });

  const paymentUrl = await initPayment({
    total_amount: Number(order.totalAmount),
    tran_id: transactionId,
    cus_name: order.customer?.name || "Customer",
    cus_email: order.customer?.email || "customer@email.com",
    cus_phone: order.phone,
    cus_add1: order.deliveryAddress,
    product_name: order.orderItems.map((i) => i.meal.name).join(", "),
  });

  return { gatewayUrl: paymentUrl, transactionId };
};

export const handlePaymentSuccess = async (body: any) => {
  console.log("Payment success callback body:", body);
  const { tran_id, val_id, status } = body;

  if (status !== "VALID" && status !== "VALIDATED" && status !== "SUCCESS") {
    throw new Error(`Invalid payment status: ${status}`);
  }
  const order = await prisma.order.update({
    where: { transactionId: tran_id },
    data: { 
      paymentStatus: PaymentStatus.PAID,
      status: OrderStatus.CONFIRMED
    },
  });
  // Redirect to frontend success page
  return `${process.env.FRONTEND_URL}/payment/success?orderId=${order.id}&tran_id=${tran_id}`;
};

export const handlePaymentFail = async (body: any) => {
  const { tran_id } = body;
  await prisma.order.update({
    where: { transactionId: tran_id },
    data: { paymentStatus: PaymentStatus.FAILED },
  });
  return `${process.env.FRONTEND_URL}/payment/fail`;
};

export const handlePaymentCancel = async (body: any) => {
  const { tran_id } = body;
  // Keep order as UNPAID on cancel, let user retry
  return `${process.env.FRONTEND_URL}/payment/cancel`;
};

export const handlePaymentIpn = async (body: any) => {
  console.log("IPN callback body:", body);
  const { tran_id, status } = body;

  if (!tran_id) return false;

  // Use updateMany to avoid throwing errors if the record is not found or already updated
  if (status === "VALID" || status === "VALIDATED" || status === "SUCCESS") {
    await prisma.order.updateMany({
      where: { transactionId: tran_id, paymentStatus: { not: PaymentStatus.PAID } },
      data: { 
        paymentStatus: PaymentStatus.PAID,
        status: OrderStatus.CONFIRMED
      },
    });
  } else if (status === "FAILED") {
    await prisma.order.updateMany({
      where: { transactionId: tran_id, paymentStatus: { not: PaymentStatus.FAILED } },
      data: { paymentStatus: PaymentStatus.FAILED },
    });
  } else if (status === "CANCELLED") {
    await prisma.order.updateMany({
      where: { transactionId: tran_id, paymentStatus: { not: PaymentStatus.CANCELLED } },
      data: { paymentStatus: PaymentStatus.CANCELLED },
    });
  }

  return true;
};

/**
 * Placeholder for validatePayment if needed by other modules
 */
const validatePayment = async (data: any) => {
  // The sslcommerz-lts package has a validate method too
  return { status: "VALID" }; // Minimal placeholder
};

export const paymentService = {
  initPayment,
  initiatePayment,
  handlePaymentSuccess,
  handlePaymentFail,
  handlePaymentCancel,
  handlePaymentIpn,
  validatePayment,
};