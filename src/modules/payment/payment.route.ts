import { Router } from "express";
import { UserRole } from "../../../generated/prisma/enums";
import { auth } from "../../middleware/auth";
import * as paymentController from "./payment.controller";

const router = Router();

// Customer initiates payment for their order
router.post("/:orderId/initiate", auth(UserRole.CUSTOMER), paymentController.initiatePayment);

// SSLCommerz callback URLs (no auth - called by SSLCommerz server)
router.post("/success", paymentController.paymentSuccess);
router.post("/fail", paymentController.paymentFail);
router.post("/cancel", paymentController.paymentCancel);

export const paymentRoutes = router;