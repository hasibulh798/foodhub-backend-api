import { Request, Response } from "express";
export declare const reviewController: {
    createReview: (req: Request, res: Response) => Promise<void>;
    getAllReviews: (req: Request, res: Response) => Promise<void>;
    getMealReviews: (req: Request, res: Response) => Promise<void>;
    deleteReview: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getPublicReviews: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=review.controller.d.ts.map