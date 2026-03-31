import { Router } from "express";
import { authController } from "./auth.controller";
import { auth } from "../../middleware/auth";
import { UserRole } from "../../../generated/prisma/enums";

const router = Router();

router.get("/me",auth(UserRole.ADMIN, UserRole.CUSTOMER, UserRole.PROVIDER), authController.getProfile)

export const authRouter = router;