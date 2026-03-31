import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import express from "express";
import { auth } from "./lib/auth";
import errorHandler from "./middleware/globalErrorHandlers";
import { notFound } from "./middleware/notFound";
import { adminRoutes } from "./modules/admin/admin.route";
import { authRouter } from "./modules/auth/auth.route";
import { categoryRoutes } from "./modules/category/categories.route";
import { mealRoutes } from "./modules/meal/meal.route";
import { orderRoutes } from "./modules/order/order.route";
import { providerProfileRoutes } from "./modules/provider-profile/providerProfile.route";
import { ProviderRoutes } from "./modules/provider/provider.route";
import { reviewRoutes } from "./modules/review/review.route";

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  }),
);

//better-auth-routes
app.all("/api/auth/{*any}", toNodeHandler(auth));

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

app.use(notFound);
app.use(errorHandler);

export default app;
