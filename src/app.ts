import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import express from "express";
import { auth } from "./lib/auth.js";
import errorHandler from "./middleware/globalErrorHandlers.js";
import { notFound } from "./middleware/notFound.js";
import { adminRoutes } from "./modules/admin/admin.route.js";
import { authRouter } from "./modules/auth/auth.route.js";
import { categoryRoutes } from "./modules/category/categories.route.js";
import { mealRoutes } from "./modules/meal/meal.route.js";
import { orderRoutes } from "./modules/order/order.route.js";
import { paymentRoutes } from "./modules/payment/payment.route.js";
import { providerProfileRoutes } from "./modules/provider-profile/providerProfile.route.js";
import { ProviderRoutes } from "./modules/provider/provider.route.js";
import { reviewRoutes } from "./modules/review/review.route.js";


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        process.env.FRONTEND_URL,
        process.env.CORS_ORIGIN,
      ].flatMap((url) => (url ? url.split(",") : [])).map((url) => url.trim());

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

//better-auth-routes
app.all("/api/auth/(.*)", toNodeHandler(auth));

//Get me
app.use("/auth/api", authRouter);
// root route
app.get("/", (_, res) => {
  res.send("Hello from the food hub api!");
});

// providerProfile routes
app.use("/api/providers", providerProfileRoutes);

// Categories routes
app.use("/api/categories", categoryRoutes);

//Meals Routes
app.use("/api/meals", mealRoutes);

//Order routes
app.use("/api/orders", orderRoutes);

// Review routes
app.use("/api/reviews", reviewRoutes);

// Admin routes
app.use("/api/admin", adminRoutes);

// Provider Specific routes
app.use("/api/provider", ProviderRoutes);

// Payment routes
app.use("/api/payment", paymentRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
