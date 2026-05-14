import { Router } from "express";
import { chatbotController } from "./chatbot.controller.js";

const router = Router();

router.post("/chat", chatbotController.chat);

export const chatbotRoutes = router;
