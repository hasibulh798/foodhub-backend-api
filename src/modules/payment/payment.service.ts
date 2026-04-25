import axios from "axios";
import { PaymentStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

const STORE_ID = process.env.STORE_ID || "testbox";
const STORE_PASS = process.env.STORE_PASS || "testbox@ssl";
const IS_SANDBOX = process.env.IS_SANDBOX === "true";

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
    const data = {
      store_id: STORE_ID,
      store_pass: STORE_PASS,
      total_amount: paymentData.total_amount,
      currency: "BDT",
      tran_id: paymentData.tran_id,
      success_url: `${process.env.BETTER_AUTH_URL}/api/payment/success?tran_id=${paymentData.tran_id}`,
      fail_url: `${process.env.BETTER_AUTH_URL}/api/payment/fail?tran_id=${paymentData.tran_id}`,
      cancel_url: `${process.env.BETTER_AUTH_URL}/api/payment/cancel?tran_id=${paymentData.tran_id}`,
      ipn_url: `${process.env.BETTER_AUTH_URL}/api/payment/ipn`,
      shipping_method: "NO",
      product_name: paymentData.product_name,
      product_category: "Food",
      product_profile: "general",
      cus_name: paymentData.cus_name,
      cus_email: paymentData.cus_email,
      cus_add1: paymentData.cus_add1,
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: paymentData.cus_phone,
      cus_fax: paymentData.cus_phone,
      ship_name: paymentData.cus_name,
      ship_add1: paymentData.cus_add1,
      ship_city: "Dhaka",
      ship_state: "Dhaka",
      ship_postcode: "1000",
      ship_country: "Bangladesh",
    };

    const response = await axios({
      method: "post",
      url: IS_SANDBOX
        ? "https://sandbox.sslcommerz.com/gwprocess/v4/api.php"
        : "https://gwprocess.sslcommerz.com/gwprocess/v4/api.php",
      data: new URLSearchParams(data as any).toString(),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    if (response.data?.status === "SUCCESS") {
      return response.data.GatewayPageURL;
    } else {
      throw new Error(response.data?.failedreason || "Payment initiation failed");
    }
  } catch (error: any) {
    throw new Error(error.message || "SSLCommerz Error");
  }
};

const validatePayment = async (data: any) => {
  try {
    const response = await axios({
      method: "get",
      url: `${
        IS_SANDBOX
          ? "https://sandbox.sslcommerz.com/validator/api/validationserverphp.php"
          : "https://gwprocess.sslcommerz.com/validator/api/validationserverphp.php"
      }?val_id=${data.val_id}&store_id=${STORE_ID}&store_pass=${STORE_PASS}&format=json`,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.message || "SSLCommerz Validation Error");
  }
};

export const paymentService = {
  initPayment,
  validatePayment,
};
