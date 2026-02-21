import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import nodemailer from "nodemailer";

import { userRoles, userStatuses } from "../types";
import { prisma } from "./prisma";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: userRoles.CUSTOMER,
        required: false,
      },
      phone: {
        type: "string",
        required: false,
      },
      status: {
        type: "string",
        defaultValue: userStatuses.ACTIVE,
        required: false,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
  },
  trustedOrigins: ["http://localhost:3000"],
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }) => {
      try {
        const verificartionUrl = `${url}?token=${token}`;
        console.log(user, url, token);

        const info = await transporter.sendMail({
          from: '"Food Hub" <food.hub@gmail.com>',
          to: user.email,
          subject: "Verify your email address",
          html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Verify your email</title>
        </head>
        <body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding:40px 10px;">
                <table width="100%" max-width="600" cellpadding="0" cellspacing="0"
                  style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05);">

                  <!-- Header -->
                  <tr>
                    <td style="background:#0f172a; padding:20px; text-align:center;">
                      <h1 style="margin:0; color:#ffffff; font-size:22px;">Food Hub Corner</h1>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:30px; color:#334155;">
                      <h2 style="margin-top:0;">Verify your email address</h2>

                      <p style="font-size:14px; line-height:1.6;">
                        Hello <strong>${user.name ?? "there"}</strong>,
                      </p>

                      <p style="font-size:14px; line-height:1.6;">
                        Thank you for signing up for <strong>Food Hub</strong>.
                        Please confirm your email address by clicking the button below.
                      </p>

                      <div style="text-align:center; margin:30px 0;">

                      <div style="text-align:center; margin:30px 0;">
                        <a href="${verificartionUrl}"
                          style="
                            background:#2563eb;
                            color:#ffffff;
                            padding:12px 24px;
                            text-decoration:none;
                            border-radius:6px;
                            font-size:14px;
                            display:inline-block;
                          ">
                          Verify Email
                        </a>
                      </div>

                      <p style="font-size:13px; color:#request64748b;">
                        If you did not create an account, you can safely ignore this email.
                      </p>

                      <p style="font-size:13px; color:#64748b;">
                        This link will expire for security reasons.
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#f1f5f9; padding:15px; text-align:center;">
                      <p style="margin:0; font-size:12px; color:#64748b;">
                        © ${new Date().getFullYear()} Prisma Blog. All rights reserved.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>`,
        });

        console.log("Verification email sent:", info.messageId);
      } catch (error) {
        console.log(error);
        throw new Error("Failed to send verification email");
      }
    },
  },
  baseUrl: process.env.BETTER_AUTH_URL!,
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      accessType: "offline",
      prompt: "select_account consent",
    },
  },
});
