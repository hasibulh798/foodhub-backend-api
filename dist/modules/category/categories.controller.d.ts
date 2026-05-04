import { Request, Response } from "express";
export declare const categoryController: {
    createCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getSingleCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getProvidersCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=categories.controller.d.ts.map