import { NextFunction, Request, Response } from "express";
import { UserRole } from "../generated/prisma/client.js";
import { auth as betterAuth } from "../lib/auth.js";

export const auth = (...roles: UserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // const session = await betterAuth.api.getSession({
    //   headers: req.headers as any,
    // });
     const originalCookie = req.headers.cookie || "";
    const normalizedCookie = originalCookie
      .split(";")
      .map((c) => c.trim())
      .map((c) =>
        c.startsWith("__Secure-session_token=")
          ? c.replace("__Secure-session_token=", "session_token=")
          : c
      )
      .join("; ");

    const modifiedHeaders = {
      ...req.headers,
      cookie: normalizedCookie,
    };

    const session = await betterAuth.api.getSession({
      headers: modifiedHeaders as any,
    });

    if (!session || !session.user) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized!",
      });
    }
    if (session.user.emailVerified === false) {
      return res.status(403).send({
        success: false,
        message: "Please verify your email to access this resource",
      });
    }
    req.user = {
      id: session.user.id,
      name: session.user.name || "",
      email: session.user.email,
      role: session.user.role as string,
      emailVerified: session.user.emailVerified || false,
    };
    if (roles.length && !roles.includes(req.user.role as UserRole)) {
      return res.status(403).send({
        success: false,
        message: "You do not have permission to access this resource",
      });
    }
    next();
  };
};
