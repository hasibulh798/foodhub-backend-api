import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

async function testModel() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return;

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
  
  try {
     const res = await model.generateContent("hello");
     console.log("Success:", res.response.text());
  } catch (e) {
    console.error("Error:", e);
  }
}

testModel();
