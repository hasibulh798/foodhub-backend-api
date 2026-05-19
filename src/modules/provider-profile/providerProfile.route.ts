import { Router } from "express";
import { UserRole } from "@prisma/client";

import { auth } from "../../middleware/auth.js";
import { providerProfileController } from "./providerProfile.controller.js";
import { upload } from "../../middleware/upload.middleware.js";

const router = Router();

// create provider
router.post("/", upload.single('logo'), providerProfileController.createProvider);
router.get("/", providerProfileController.getAllProvider);

// Provider specific profile routes
router.get("/me", auth(UserRole.PROVIDER), providerProfileController.getMyProviderProfile);
router.patch("/me", auth(UserRole.PROVIDER), providerProfileController.updateMyProviderProfile);

router.get("/:providerId", providerProfileController.getSingleProvider);
router.put("/:providerId", providerProfileController.updateProviderProfile);

export const providerProfileRoutes = router;

