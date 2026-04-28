import { Response } from "express";
type SendResponseType = {
    res: Response;
    statusCode: number;
    success: boolean;
    message: string;
    data?: any;
    error?: any;
};
export declare const sendResponse: ({ res, statusCode, success, message, data, error, }: SendResponseType) => Response<any, Record<string, any>>;
export {};
//# sourceMappingURL=sendResponse.d.ts.map