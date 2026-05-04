import { Router } from "express";
import { UserRole } from "../../generated/prisma/client.js";
import { auth } from "../../middleware/auth.js";
import { providerProfileController } from "./providerProfile.controller.js";
const router = Router();
// create provider
router.post("/", providerProfileController.createProvider);
router.get("/", providerProfileController.getAllProvider);
// Provider specific profile routes
router.get("/me", auth(UserRole.PROVIDER), providerProfileController.getMyProviderProfile);
router.patch("/me", auth(UserRole.PROVIDER), providerProfileController.updateMyProviderProfile);
router.get("/:providerId", providerProfileController.getSingleProvider);
router.put("/:providerId", providerProfileController.updateProviderProfile);
export const providerProfileRoutes = router;
//# sourceMappingURL=providerProfile.route.js.map