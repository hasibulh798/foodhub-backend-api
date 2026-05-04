export declare const reviewService: {
    createReview: (payload: {
        orderId: string;
        mealId: string;
        rating: number;
        comment?: string;
    }, userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        comment: string | null;
        orderId: string;
        customerId: string;
        mealId: string;
    }>;
    getAllReviews: (userId: string) => Promise<({
        meal: {
            name: string;
            id: string;
            provider: {
                id: string;
                businessName: string;
            };
            price: import("@prisma/client-runtime-utils").Decimal;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        comment: string | null;
        orderId: string;
        customerId: string;
        mealId: string;
    })[] | ({
        meal: {
            name: string;
            id: string;
        };
        customer: {
            name: string;
            id: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        comment: string | null;
        orderId: string;
        customerId: string;
        mealId: string;
    })[]>;
    getMealReviews: (mealId: string) => Promise<({
        order: {
            id: string;
            createdAt: Date;
        };
        customer: {
            name: string;
            id: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        comment: string | null;
        orderId: string;
        customerId: string;
        mealId: string;
    })[]>;
    deleteReview: (reviewId: string, userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        comment: string | null;
        orderId: string;
        customerId: string;
        mealId: string;
    }>;
    getPublicReviews: () => Promise<({
        meal: {
            name: string;
        };
        customer: {
            name: string;
            image: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        comment: string | null;
        orderId: string;
        customerId: string;
        mealId: string;
    })[]>;
};
//# sourceMappingURL=review.service.d.ts.map