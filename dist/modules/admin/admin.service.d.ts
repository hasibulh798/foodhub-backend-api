import { UserRole, UserStatus } from "../../generated/prisma/client.js";
export declare const adminService: {
    updateProviderStatus: (payload: {
        isVerified: boolean;
    }, providerId: string, userId: string) => Promise<void>;
    getAllUsers: (userId: string) => Promise<{
        name: string;
        role: UserRole;
        status: UserStatus | null;
        email: string;
        id: string;
        emailVerified: boolean;
        providerProfiles: {
            id: string;
            isVerified: boolean;
        } | null;
    }[]>;
    updateUserStatus: (adminId: string, userId: string, status: UserStatus) => Promise<{
        name: string;
        role: UserRole;
        phone: string | null;
        status: UserStatus | null;
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        emailVerified: boolean;
        image: string | null;
    }>;
    deleteUser: (userId: string) => Promise<{
        name: string;
        role: UserRole;
        phone: string | null;
        status: UserStatus | null;
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        emailVerified: boolean;
        image: string | null;
    }>;
    deleteProviderProfile: (providerId: string, userId: string) => Promise<{
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
    getDashboardStats: () => Promise<{
        data: {
            totalOrders: number;
            totalUsers: number;
            totalProviders: number;
            verifiedProviders: number;
            totalRevenue: number | import("@prisma/client-runtime-utils").Decimal;
        };
    }>;
    updateEmailVerification: (userId: string, isVerified: boolean) => Promise<{
        name: string;
        role: UserRole;
        phone: string | null;
        status: UserStatus | null;
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        emailVerified: boolean;
        image: string | null;
    }>;
};
//# sourceMappingURL=admin.service.d.ts.map