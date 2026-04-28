import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { oAuthProxy } from "better-auth/plugins";
import nodemailer from "nodemailer";
import { userRoles, userStatuses } from "../types/index.js";
import { prisma } from "./prisma.js";
export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
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
    baseURL: process.env.BETTER_AUTH_URL,
    trustedOrigins: [process.env.FRONTEND_URL],
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({ user, url, token }) => {
            try {
                const parsedUrl = new URL(url);
                const verificationUrl = `${process.env.FRONTEND_URL}${parsedUrl.pathname}${parsedUrl.search}`;
                // const verificationUrl = `${url}?token=${token}`;
                // console.log(user, url, token);
                const info = await transporter.sendMail({
                    from: `"Food Hub" <${process.env.SMTP_USER}>`,
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
                        <a href="${verificationUrl}"
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

                      <p style="font-size:13px; color:#64748b;">
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
                        © ${new Date().getFullYear()} Food Hub. All rights reserved.
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
            }
            catch (error) {
                console.log(error);
                throw new Error("Failed to send verification email");
            }
        },
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            accessType: "offline",
            prompt: "select_account consent",
        },
    },
    advanced: {
        cookies: {
            session_token: {
                name: "session_token",
                attributes: {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
                },
            },
        },
    },
    plugins: [oAuthProxy()]
});
//# sourceMappingURL=auth.js.map