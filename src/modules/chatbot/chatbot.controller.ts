import { Request, Response } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "../../lib/prisma.js";

const SYSTEM_PROMPT = `You are FoodHub AI Assistant — a friendly, knowledgeable food assistant for the FoodHub platform. 

Your role:
- Help users discover meals, restaurants, and cuisines available on FoodHub
- Answer questions about food, nutrition, dietary preferences (Veg, Non-Veg, Vegan)
- Assist with order-related queries
- Provide food recommendations based on user preferences
- Share cooking tips, ingredient info, and food facts
- Help users navigate the platform

Guidelines:
- Be warm, conversational, and enthusiastic about food 🍕
- Keep responses concise but helpful (2-4 sentences max unless detailed info is needed)
- Use food emojis sparingly to keep it fun
- If asked about something unrelated to food or the platform, gently redirect
- Never make up specific menu items — only reference real data when provided
- If you don't know something specific about the platform, suggest the user check the relevant page

Platform Info:
- FoodHub is a meal delivery platform connecting food providers/restaurants with customers
- Users can browse meals by category, cuisine, and dietary type
- Available dietary types: Vegetarian (VEG), Non-Vegetarian (NON_VEG), Vegan (VEGAN)
- Users can place orders, track them, and leave reviews
- Payment options include Cash on Delivery (COD) and Online payment`;

export const chatbotController = {
  chat: async (req: Request, res: Response) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== "string") {
        res.status(400).json({
          success: false,
          message: "Message is required",
        });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.status(500).json({
          success: false,
          message: "AI service is not configured",
        });
        return;
      }

      // Fetch context from DB
      let contextInfo = "";
      try {
        const [categories, mealCount, providerCount] = await Promise.all([
          prisma.category.findMany({
            where: { isActive: true },
            select: { name: true },
            take: 20,
          }),
          prisma.meal.count({ where: { isAvailable: true } }),
          prisma.provider_profile.count({ where: { isVerified: true } }),
        ]);

        contextInfo = `\n\nCurrent Platform Data:
- Available categories: ${categories.map((c) => c.name).join(", ")}
- Total available meals: ${mealCount}
- Verified restaurants/providers: ${providerCount}`;
      } catch {
        // Continue without context
      }

      // Fetch relevant meals if needed
      const lowerMessage = message.toLowerCase();
      const isMealQuery =
        lowerMessage.includes("meal") ||
        lowerMessage.includes("food") ||
        lowerMessage.includes("recommend") ||
        lowerMessage.includes("suggest") ||
        lowerMessage.includes("eat") ||
        lowerMessage.includes("menu") ||
        lowerMessage.includes("dish") ||
        lowerMessage.includes("cuisine") ||
        lowerMessage.includes("veg") ||
        lowerMessage.includes("vegan") ||
        lowerMessage.includes("popular") ||
        lowerMessage.includes("best");

      if (isMealQuery) {
        try {
          const meals = await prisma.meal.findMany({
            where: { isAvailable: true },
            select: {
              name: true,
              price: true,
              cuisine: true,
              dietaryType: true,
              category: { select: { name: true } },
              provider: { select: { businessName: true } },
            },
            take: 10,
            orderBy: { createdAt: "desc" },
          });

          if (meals.length > 0) {
            contextInfo += `\n\nSome available meals on the platform:
${meals
  .map(
    (m) =>
      `- ${m.name} (${m.cuisine || "Various"}, ${m.dietaryType || "N/A"}) — ৳${m.price} from ${m.provider.businessName} [${m.category.name}]`
  )
  .join("\n")}`;
          }
        } catch {
          // Continue
        }
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-flash-latest",
        systemInstruction: SYSTEM_PROMPT + contextInfo,
      });

      // Format history for the standard SDK
      const chatHistory = (history || []).map((msg: any) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      }));

      const chat = model.startChat({
        history: chatHistory,
      });

      const result = await chat.sendMessage(message);
      const response = await result.response;
      const text = response.text();

      res.json({
        success: true,
        data: {
          message: text,
        },
      });
    } catch (error: any) {
      console.error("Chatbot error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to get AI response",
        error: error.message,
      });
    }
  },
};
