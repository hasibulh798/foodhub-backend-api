import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import { prisma } from "./lib/prisma.js";


const PORT = process.env.PORT || 5000;

async function main() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("An error occured: ", err);
  }
}
main();