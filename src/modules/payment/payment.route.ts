import express from "express";
import { paymentController } from "./payment.controller";

const router = express.Router();

router.post("/success", paymentController.handleSuccess);
router.post("/fail", paymentController.handleFail);
router.post("/cancel", paymentController.handleCancel);
router.post("/ipn", paymentController.handleIPN);

// Also support GET for development/testing if needed, but SSLCommerz sends POST
router.get("/success", paymentController.handleSuccess);
router.get("/fail", paymentController.handleFail);
router.get("/cancel", paymentController.handleCancel);

export const paymentRoutes = router;
