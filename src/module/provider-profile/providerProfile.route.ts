import { Router } from "express";
import { providerProfileController } from "./providerProfile.controller";


const router = Router();

// create provider
router.post("/create", providerProfileController.createProvider);
router.get("/", providerProfileController.getAllProvider);
router.get("/:providerId", providerProfileController.getSingleProvider);
router.put("/:providerId", providerProfileController.updateProviderProfile);

export const providerProfileRoutes = router;
