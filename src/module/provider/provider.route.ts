import { Router } from "express";
import { providerController } from "./provider.controller";

const router = Router();

// create provider
router.post("/create", providerController.createProvider);
router.get("/", providerController.getAllProvider);
router.get("/:providerId", providerController.getSingleProvider);
router.patch("/:providerId", providerController.updateProviderProfile);
// router.delete("/:userId", providerController.deleteProviderProfile);

export const providerRoutes = router;
