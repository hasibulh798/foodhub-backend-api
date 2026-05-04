import { Request, Response } from "express";
export declare const adminController: {
    updateProviderStatus: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllUsers: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateUserStatus: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteProviderProfile: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getDashboardStats: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateEmailVerification: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=admin.controller.d.ts.map