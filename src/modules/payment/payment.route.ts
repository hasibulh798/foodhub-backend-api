import { Router } from "express";
import { UserRole } from "../../generated/prisma/client.js";
import { auth } from "../../middleware/auth.js";
import * as paymentController from "./payment.controller.js";

const router = Router();

// Customer initiates payment for their order
router.post("/:orderId/initiate", auth(UserRole.CUSTOMER), paymentController.initiatePayment);

// SSLCommerz callback URLs (no auth - called by SSLCommerz server)
router.post("/success", paymentController.paymentSuccess);
router.post("/fail", paymentController.paymentFail);
router.post("/cancel", paymentController.paymentCancel);
router.post("/ipn", paymentController.paymentIpn);

export const paymentRoutes = router;