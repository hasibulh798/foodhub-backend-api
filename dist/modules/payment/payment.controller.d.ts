import { Request, Response } from "express";
export declare const initiatePayment: (req: Request, res: Response) => Promise<void>;
export declare const paymentSuccess: (req: Request, res: Response) => Promise<void>;
export declare const paymentFail: (req: Request, res: Response) => Promise<void>;
export declare const paymentCancel: (req: Request, res: Response) => Promise<void>;
export declare const paymentIpn: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=payment.controller.d.ts.map