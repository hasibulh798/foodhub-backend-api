import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import express from "express";
import { auth } from "./lib/auth";
import { adminRoutes } from "./module/admin/admin.route";
import { providerProfileRoutes } from "./module/provider-profile/providerProfile.route";
import { ProviderRoutes } from "./module/provider/provider.route";

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

// root route
app.get("/", (_, res) => {
  res.send("Hello from the food hub api!");
});

// providerProfile routes
app.use("/api/providers", providerProfileRoutes);

// Admin routes
app.use("/api/admin", adminRoutes);

// Provider Specific routes
app.use("/api/provider", ProviderRoutes);

export default app;
