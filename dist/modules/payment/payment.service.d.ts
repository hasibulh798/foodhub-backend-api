/**
 * New implementation that takes orderId and userId
 */
export declare const initiatePayment: (orderId: string, userId: string) => Promise<{
    gatewayUrl: any;
    transactionId: string;
}>;
export declare const handlePaymentSuccess: (body: any) => Promise<string>;
export declare const handlePaymentFail: (body: any) => Promise<string>;
export declare const handlePaymentCancel: (body: any) => Promise<string>;
export declare const handlePaymentIpn: (body: any) => Promise<boolean>;
export declare const paymentService: {
    initPayment: (paymentData: {
        total_amount: number;
        tran_id: string;
        cus_name: string;
        cus_email: string;
        cus_phone: string;
        cus_add1: string;
        product_name: string;
    }) => Promise<any>;
    initiatePayment: (orderId: string, userId: string) => Promise<{
        gatewayUrl: any;
        transactionId: string;
    }>;
    handlePaymentSuccess: (body: any) => Promise<string>;
    handlePaymentFail: (body: any) => Promise<string>;
    handlePaymentCancel: (body: any) => Promise<string>;
    handlePaymentIpn: (body: any) => Promise<boolean>;
    validatePayment: (data: any) => Promise<{
        status: string;
    }>;
};
//# sourceMappingURL=payment.service.d.ts.map