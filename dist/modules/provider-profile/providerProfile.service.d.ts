export declare const providerProfileServices: {
    createProvider: (payload: {
        name: string;
        email: string;
        password: string;
        phone?: string;
        businessName: string;
        address: string;
        logoUrl?: string;
        deliveryFee?: number;
    }) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        businessName: string;
        address: string;
        isVerified: boolean;
        logoUrl: string | null;
        deliveryFee: import("@prisma/client-runtime-utils").Decimal;
    }>;
    getAllProvider: (filter?: {
        page?: number;
        limit?: number;
        isVerified?: boolean;
    }) => Promise<{
        data: ({
            _count: {
                meals: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            businessName: string;
            address: string;
            isVerified: boolean;
            logoUrl: string | null;
            deliveryFee: import("@prisma/client-runtime-utils").Decimal;
        })[];
        totalCount: number;
        totalPages: number;
        page: number;
        limit: number;
    }>;
    getSingleProvider: (providerId: string) => Promise<{
        provider: {
            meals: {
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
                dietaryType: import("../../generated/prisma/enums.js").DietaryType | null;
            }[];
        } & {
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
        totalMeals: number;
        totalOrder: number;
        averageRating: number;
        totalReviews: number;
    } | null>;
    updateProviderProfile: (payload: {
        businessName: string;
        address: string;
        logoUrl: string;
        deliveryFee?: number;
    }, providerId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        businessName: string;
        address: string;
        isVerified: boolean;
        logoUrl: string | null;
        deliveryFee: import("@prisma/client-runtime-utils").Decimal;
    }>;
    getMyProviderProfile: (userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        businessName: string;
        address: string;
        isVerified: boolean;
        logoUrl: string | null;
        deliveryFee: import("@prisma/client-runtime-utils").Decimal;
    } | null>;
    updateMyProviderProfile: (userId: string, payload: {
        businessName?: string;
        address?: string;
        logoUrl?: string;
        deliveryFee?: number;
    }) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        businessName: string;
        address: string;
        isVerified: boolean;
        logoUrl: string | null;
        deliveryFee: import("@prisma/client-runtime-utils").Decimal;
    }>;
};
//# sourceMappingURL=providerProfile.service.d.ts.map