export declare const categoryService: {
    createCategory: (payload: {
        name: string;
        iconUrl?: string;
    }) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        iconUrl: string | null;
        isActive: boolean;
    }>;
    getAllCategory: () => Promise<({
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
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        iconUrl: string | null;
        isActive: boolean;
    })[]>;
    getSingleCategory: (catId: string, userId: string) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        iconUrl: string | null;
        isActive: boolean;
    } | null>;
    getProvidersCategory: (providerId: string) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        iconUrl: string | null;
        isActive: boolean;
    }[]>;
    updateCategory: (payload: {
        name?: string;
        isActive?: boolean;
        iconUrl?: string;
    }, catId: string, userId: string) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        iconUrl: string | null;
        isActive: boolean;
    }>;
    deleteCategory: (catId: string, userId: string) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        iconUrl: string | null;
        isActive: boolean;
    }>;
};
//# sourceMappingURL=categories.service.d.ts.map