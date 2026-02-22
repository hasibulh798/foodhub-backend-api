import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import express from "express";
import { auth } from "./lib/auth";
import { providerRoutes } from "./module/provider/provider.route";

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

// provider routes
app.use("/api/providers", providerRoutes);

export default app;
