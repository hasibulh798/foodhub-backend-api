import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function test() {
  try {
    console.log("Verifying SMTP connection...");
    await transporter.verify();
    console.log("SMTP connection verified successfully!");
    
    console.log("Attempting to send test email to:", process.env.SMTP_USER);
    const info = await transporter.sendMail({
      from: `"Food Hub Test" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "SMTP Test",
      text: "If you receive this, SMTP is working.",
    });
    console.log("Test email sent:", info.messageId);
  } catch (error) {
    console.error("SMTP Test failed:", error);
  }
}

test();
