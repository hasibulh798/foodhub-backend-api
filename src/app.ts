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
import { chatbotRoutes } from "./modules/chatbot/chatbot.route.js";


const app = express();
app.set("trust proxy", 1);

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("/{*path}", cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

//better-auth-routes
app.use("/api/auth", toNodeHandler(auth));


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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

// Chatbot routes
app.use("/api/chatbot", chatbotRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
