import { Router } from "express";
import { authController } from "./auth.controller.js";
import { auth } from "../../middleware/auth.js";
import { UserRole } from "@prisma/client";

const router = Router();

router.get("/me",auth(UserRole.ADMIN, UserRole.CUSTOMER, UserRole.PROVIDER), authController.getProfile)

export const authRouter = router;