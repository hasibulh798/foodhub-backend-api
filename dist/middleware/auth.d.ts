import { NextFunction, Request, Response } from "express";
import { UserRole } from "../generated/prisma/client.js";
export declare const auth: (...roles: UserRole[]) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=auth.d.ts.map