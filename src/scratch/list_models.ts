import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

async function listAllModels() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return;

  const genAI = new GoogleGenerativeAI(apiKey);
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
  
  const res = await fetch(url);
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

listAllModels();
