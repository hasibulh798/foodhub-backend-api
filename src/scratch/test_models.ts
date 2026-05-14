import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

async function listModels() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("No API key found");
    return;
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const result = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  try {
     // Just a dummy call to see what happens
     const res = await result.generateContent("test");
     console.log("Success with gemini-1.5-flash");
  } catch (e) {
    console.error("Error with gemini-1.5-flash:", e);
  }
}

listModels();
