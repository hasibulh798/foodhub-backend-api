import { OrderStatus } from "../../generated/prisma/client.js";
import { PaymentMethod } from "../../generated/prisma/client.js";
export declare const orderService: {
    createOrder: (orderData: {
        phone: string;
        paymentMethod: PaymentMethod;
        deliveryAddress: string;
        Items: {
            mealId: string;
            quantity: number;
        }[];
    }, userId: string) => Promise<({
        orderItems: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            price: import("@prisma/client-runtime-utils").Decimal;
            orderId: string;
            mealId: string;
            quantity: number;
        }[];
    } & {
        phone: string;
        status: OrderStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        deliveryFee: import("@prisma/client-runtime-utils").Decimal;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        customerId: string;
        transactionId: string | null;
        paymentMethod: PaymentMethod;
        paymentStatus: import("../../generated/prisma/enums.js").PaymentStatus;
        deliveryAddress: string;
    }) | {
        paymentUrl: any;
        orderItems: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            price: import("@prisma/client-runtime-utils").Decimal;
            orderId: string;
            mealId: string;
            quantity: number;
        }[];
        phone: string;
        status: OrderStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        deliveryFee: import("@prisma/client-runtime-utils").Decimal;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        customerId: string;
        transactionId: string | null;
        paymentMethod: PaymentMethod;
        paymentStatus: import("../../generated/prisma/enums.js").PaymentStatus;
        deliveryAddress: string;
    }>;
    getAllOrders: (userId: string) => Promise<any>;
    getSingleOrder: (orderId: string, userId: string) => Promise<{
        provider: {
            id: string;
            businessName: string;
        };
        customer: {
            name: string;
            id: string;
        } | null;
        orderItems: ({
            meal: {
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
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            price: import("@prisma/client-runtime-utils").Decimal;
            orderId: string;
            mealId: string;
            quantity: number;
        })[];
    } & {
        phone: string;
        status: OrderStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        deliveryFee: import("@prisma/client-runtime-utils").Decimal;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        customerId: string;
        transactionId: string | null;
        paymentMethod: PaymentMethod;
        paymentStatus: import("../../generated/prisma/enums.js").PaymentStatus;
        deliveryAddress: string;
    }>;
    cancelOrder: (orderId: string, userId: string) => Promise<{
        phone: string;
        status: OrderStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        deliveryFee: import("@prisma/client-runtime-utils").Decimal;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        customerId: string;
        transactionId: string | null;
        paymentMethod: PaymentMethod;
        paymentStatus: import("../../generated/prisma/enums.js").PaymentStatus;
        deliveryAddress: string;
    }>;
};
//# sourceMappingURL=order.service.d.ts.map