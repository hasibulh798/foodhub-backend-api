import { Request, Response } from "express";
export declare const providerController: {
    createMeal: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getMyMeals: (req: Request, res: Response) => Promise<void>;
    updateMeal: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteMeal: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateOrderStatus: (req: Request, res: Response) => Promise<void>;
    cancelOrder: (req: Request, res: Response) => Promise<void>;
    toggleMealAvailability: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=provider.controller.d.ts.map