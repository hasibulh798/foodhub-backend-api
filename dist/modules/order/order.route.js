import { Router } from "express";
import { UserRole } from "../../generated/prisma/client.js";
import { auth } from "../../middleware/auth.js";
import { orderController } from "./order.controller.js";
const router = Router();
router.post("/", auth(UserRole.CUSTOMER), orderController.createOrder);
router.get("/", auth(UserRole.CUSTOMER, UserRole.PROVIDER, UserRole.ADMIN), orderController.getAllOrders);
router.get("/:orderId", auth(UserRole.CUSTOMER, UserRole.PROVIDER, UserRole.ADMIN), orderController.getSingleOrder);
router.patch("/:orderId/cancel", auth(UserRole.CUSTOMER, UserRole.PROVIDER, UserRole.ADMIN), orderController.cancelOrder);
// router.delete(
//   "/:orderId",
//   auth(UserRole.PROVIDER, UserRole.ADMIN),
//   orderController.deleteOrder,
// );
export const orderRoutes = router;
//# sourceMappingURL=order.route.js.map