import { DietaryType } from "../../generated/prisma/client.js";
export declare const mealService: {
    getAllMeals: (filter?: {
        search?: string | undefined;
        isAvailable?: boolean | undefined;
        cuisine?: string | undefined;
        dietaryType?: DietaryType | undefined;
        categoryId?: string | undefined;
        providerId?: string | undefined;
        minPrice?: number | undefined;
        maxPrice?: number | undefined;
        page?: number;
        limit?: number;
    }) => Promise<{
        data: ({
            provider: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                businessName: string;
                address: string;
                isVerified: boolean;
                logoUrl: string | null;
                deliveryFee: import("@prisma/client-runtime-utils").Decimal;
            };
            reviews: {
                rating: number;
                comment: string | null;
                customer: {
                    name: string;
                } | null;
            }[];
            order_items: {
                price: import("@prisma/client-runtime-utils").Decimal;
                orderId: string;
                quantity: number;
            }[];
        } & {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            providerId: string;
            categoryId: string;
            description: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            isAvailable: boolean;
            imageUrl: string | null;
            cuisine: string | null;
            dietaryType: DietaryType | null;
        })[];
        totalCount: number;
        totalPages: number;
        page: number;
        limit: number;
    }>;
    getSingleMeal: (mealId: string) => Promise<({
        provider: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            businessName: string;
            address: string;
            isVerified: boolean;
            logoUrl: string | null;
            deliveryFee: import("@prisma/client-runtime-utils").Decimal;
        };
        reviews: {
            rating: number;
            comment: string | null;
            customer: {
                name: string;
            } | null;
        }[];
        order_items: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            price: import("@prisma/client-runtime-utils").Decimal;
            orderId: string;
            mealId: string;
            quantity: number;
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        categoryId: string;
        description: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        isAvailable: boolean;
        imageUrl: string | null;
        cuisine: string | null;
        dietaryType: DietaryType | null;
    }) | null>;
};
//# sourceMappingURL=meal.service.d.ts.map