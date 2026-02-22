import { Router } from "express";
import { providerController } from "./provider.controller";

const router = Router();

// create provider
router.post("/create", providerController.createProvider);
router.get("/", providerController.getAllProvider);
// router.get("/:userId", providerController.getSingleProvider);
// router.patch("/:userId", providerController.updateProviderProfile);
// router.delete("/:userId", providerController.deleteProviderProfile);

export const providerRoutes = router;
