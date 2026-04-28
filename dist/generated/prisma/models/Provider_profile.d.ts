import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Provider_profile
 *
 */
export type Provider_profileModel = runtime.Types.Result.DefaultSelection<Prisma.$Provider_profilePayload>;
export type AggregateProvider_profile = {
    _count: Provider_profileCountAggregateOutputType | null;
    _avg: Provider_profileAvgAggregateOutputType | null;
    _sum: Provider_profileSumAggregateOutputType | null;
    _min: Provider_profileMinAggregateOutputType | null;
    _max: Provider_profileMaxAggregateOutputType | null;
};
export type Provider_profileAvgAggregateOutputType = {
    deliveryFee: runtime.Decimal | null;
};
export type Provider_profileSumAggregateOutputType = {
    deliveryFee: runtime.Decimal | null;
};
export type Provider_profileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    businessName: string | null;
    address: string | null;
    isVerified: boolean | null;
    logoUrl: string | null;
    deliveryFee: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type Provider_profileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    businessName: string | null;
    address: string | null;
    isVerified: boolean | null;
    logoUrl: string | null;
    deliveryFee: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type Provider_profileCountAggregateOutputType = {
    id: number;
    userId: number;
    businessName: number;
    address: number;
    isVerified: number;
    logoUrl: number;
    deliveryFee: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type Provider_profileAvgAggregateInputType = {
    deliveryFee?: true;
};
export type Provider_profileSumAggregateInputType = {
    deliveryFee?: true;
};
export type Provider_profileMinAggregateInputType = {
    id?: true;
    userId?: true;
    businessName?: true;
    address?: true;
    isVerified?: true;
    logoUrl?: true;
    deliveryFee?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type Provider_profileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    businessName?: true;
    address?: true;
    isVerified?: true;
    logoUrl?: true;
    deliveryFee?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type Provider_profileCountAggregateInputType = {
    id?: true;
    userId?: true;
    businessName?: true;
    address?: true;
    isVerified?: true;
    logoUrl?: true;
    deliveryFee?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type Provider_profileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Provider_profile to aggregate.
     */
    where?: Prisma.Provider_profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Provider_profiles to fetch.
     */
    orderBy?: Prisma.Provider_profileOrderByWithRelationInput | Prisma.Provider_profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Provider_profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Provider_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Provider_profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Provider_profiles
    **/
    _count?: true | Provider_profileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Provider_profileAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Provider_profileSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Provider_profileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Provider_profileMaxAggregateInputType;
};
export type GetProvider_profileAggregateType<T extends Provider_profileAggregateArgs> = {
    [P in keyof T & keyof AggregateProvider_profile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProvider_profile[P]> : Prisma.GetScalarType<T[P], AggregateProvider_profile[P]>;
};
export type Provider_profileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Provider_profileWhereInput;
    orderBy?: Prisma.Provider_profileOrderByWithAggregationInput | Prisma.Provider_profileOrderByWithAggregationInput[];
    by: Prisma.Provider_profileScalarFieldEnum[] | Prisma.Provider_profileScalarFieldEnum;
    having?: Prisma.Provider_profileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Provider_profileCountAggregateInputType | true;
    _avg?: Provider_profileAvgAggregateInputType;
    _sum?: Provider_profileSumAggregateInputType;
    _min?: Provider_profileMinAggregateInputType;
    _max?: Provider_profileMaxAggregateInputType;
};
export type Provider_profileGroupByOutputType = {
    id: string;
    userId: string;
    businessName: string;
    address: string;
    isVerified: boolean;
    logoUrl: string | null;
    deliveryFee: runtime.Decimal;
    createdAt: Date;
    updatedAt: Date;
    _count: Provider_profileCountAggregateOutputType | null;
    _avg: Provider_profileAvgAggregateOutputType | null;
    _sum: Provider_profileSumAggregateOutputType | null;
    _min: Provider_profileMinAggregateOutputType | null;
    _max: Provider_profileMaxAggregateOutputType | null;
};
type GetProvider_profileGroupByPayload<T extends Provider_profileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Provider_profileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Provider_profileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Provider_profileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Provider_profileGroupByOutputType[P]>;
}>>;
export type Provider_profileWhereInput = {
    AND?: Prisma.Provider_profileWhereInput | Prisma.Provider_profileWhereInput[];
    OR?: Prisma.Provider_profileWhereInput[];
    NOT?: Prisma.Provider_profileWhereInput | Prisma.Provider_profileWhereInput[];
    id?: Prisma.StringFilter<"Provider_profile"> | string;
    userId?: Prisma.StringFilter<"Provider_profile"> | string;
    businessName?: Prisma.StringFilter<"Provider_profile"> | string;
    address?: Prisma.StringFilter<"Provider_profile"> | string;
    isVerified?: Prisma.BoolFilter<"Provider_profile"> | boolean;
    logoUrl?: Prisma.StringNullableFilter<"Provider_profile"> | string | null;
    deliveryFee?: Prisma.DecimalFilter<"Provider_profile"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"Provider_profile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Provider_profile"> | Date | string;
    meals?: Prisma.MealListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type Provider_profileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    businessName?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryFee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    meals?: Prisma.MealOrderByRelationAggregateInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type Provider_profileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.Provider_profileWhereInput | Prisma.Provider_profileWhereInput[];
    OR?: Prisma.Provider_profileWhereInput[];
    NOT?: Prisma.Provider_profileWhereInput | Prisma.Provider_profileWhereInput[];
    businessName?: Prisma.StringFilter<"Provider_profile"> | string;
    address?: Prisma.StringFilter<"Provider_profile"> | string;
    isVerified?: Prisma.BoolFilter<"Provider_profile"> | boolean;
    logoUrl?: Prisma.StringNullableFilter<"Provider_profile"> | string | null;
    deliveryFee?: Prisma.DecimalFilter<"Provider_profile"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"Provider_profile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Provider_profile"> | Date | string;
    meals?: Prisma.MealListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId">;
export type Provider_profileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    businessName?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryFee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.Provider_profileCountOrderByAggregateInput;
    _avg?: Prisma.Provider_profileAvgOrderByAggregateInput;
    _max?: Prisma.Provider_profileMaxOrderByAggregateInput;
    _min?: Prisma.Provider_profileMinOrderByAggregateInput;
    _sum?: Prisma.Provider_profileSumOrderByAggregateInput;
};
export type Provider_profileScalarWhereWithAggregatesInput = {
    AND?: Prisma.Provider_profileScalarWhereWithAggregatesInput | Prisma.Provider_profileScalarWhereWithAggregatesInput[];
    OR?: Prisma.Provider_profileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Provider_profileScalarWhereWithAggregatesInput | Prisma.Provider_profileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Provider_profile"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Provider_profile"> | string;
    businessName?: Prisma.StringWithAggregatesFilter<"Provider_profile"> | string;
    address?: Prisma.StringWithAggregatesFilter<"Provider_profile"> | string;
    isVerified?: Prisma.BoolWithAggregatesFilter<"Provider_profile"> | boolean;
    logoUrl?: Prisma.StringNullableWithAggregatesFilter<"Provider_profile"> | string | null;
    deliveryFee?: Prisma.DecimalWithAggregatesFilter<"Provider_profile"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Provider_profile"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Provider_profile"> | Date | string;
};
export type Provider_profileCreateInput = {
    id?: string;
    businessName: string;
    address: string;
    isVerified?: boolean;
    logoUrl?: string | null;
    deliveryFee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    meals?: Prisma.MealCreateNestedManyWithoutProviderInput;
    orders?: Prisma.OrderCreateNestedManyWithoutProviderInput;
    user: Prisma.UserCreateNestedOneWithoutProviderProfilesInput;
};
export type Provider_profileUncheckedCreateInput = {
    id?: string;
    userId: string;
    businessName: string;
    address: string;
    isVerified?: boolean;
    logoUrl?: string | null;
    deliveryFee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    meals?: Prisma.MealUncheckedCreateNestedManyWithoutProviderInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutProviderInput;
};
export type Provider_profileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meals?: Prisma.MealUpdateManyWithoutProviderNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutProviderNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutProviderProfilesNestedInput;
};
export type Provider_profileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meals?: Prisma.MealUncheckedUpdateManyWithoutProviderNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutProviderNestedInput;
};
export type Provider_profileCreateManyInput = {
    id?: string;
    userId: string;
    businessName: string;
    address: string;
    isVerified?: boolean;
    logoUrl?: string | null;
    deliveryFee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type Provider_profileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Provider_profileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Provider_profileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    businessName?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    deliveryFee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type Provider_profileAvgOrderByAggregateInput = {
    deliveryFee?: Prisma.SortOrder;
};
export type Provider_profileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    businessName?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    deliveryFee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type Provider_profileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    businessName?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    deliveryFee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type Provider_profileSumOrderByAggregateInput = {
    deliveryFee?: Prisma.SortOrder;
};
export type Provider_profileScalarRelationFilter = {
    is?: Prisma.Provider_profileWhereInput;
    isNot?: Prisma.Provider_profileWhereInput;
};
export type Provider_profileNullableScalarRelationFilter = {
    is?: Prisma.Provider_profileWhereInput | null;
    isNot?: Prisma.Provider_profileWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type Provider_profileCreateNestedOneWithoutMealsInput = {
    create?: Prisma.XOR<Prisma.Provider_profileCreateWithoutMealsInput, Prisma.Provider_profileUncheckedCreateWithoutMealsInput>;
    connectOrCreate?: Prisma.Provider_profileCreateOrConnectWithoutMealsInput;
    connect?: Prisma.Provider_profileWhereUniqueInput;
};
export type Provider_profileUpdateOneRequiredWithoutMealsNestedInput = {
    create?: Prisma.XOR<Prisma.Provider_profileCreateWithoutMealsInput, Prisma.Provider_profileUncheckedCreateWithoutMealsInput>;
    connectOrCreate?: Prisma.Provider_profileCreateOrConnectWithoutMealsInput;
    upsert?: Prisma.Provider_profileUpsertWithoutMealsInput;
    connect?: Prisma.Provider_profileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Provider_profileUpdateToOneWithWhereWithoutMealsInput, Prisma.Provider_profileUpdateWithoutMealsInput>, Prisma.Provider_profileUncheckedUpdateWithoutMealsInput>;
};
export type Provider_profileCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.Provider_profileCreateWithoutOrdersInput, Prisma.Provider_profileUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.Provider_profileCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.Provider_profileWhereUniqueInput;
};
export type Provider_profileUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.Provider_profileCreateWithoutOrdersInput, Prisma.Provider_profileUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.Provider_profileCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.Provider_profileUpsertWithoutOrdersInput;
    connect?: Prisma.Provider_profileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Provider_profileUpdateToOneWithWhereWithoutOrdersInput, Prisma.Provider_profileUpdateWithoutOrdersInput>, Prisma.Provider_profileUncheckedUpdateWithoutOrdersInput>;
};
export type Provider_profileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.Provider_profileCreateWithoutUserInput, Prisma.Provider_profileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.Provider_profileCreateOrConnectWithoutUserInput;
    connect?: Prisma.Provider_profileWhereUniqueInput;
};
export type Provider_profileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.Provider_profileCreateWithoutUserInput, Prisma.Provider_profileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.Provider_profileCreateOrConnectWithoutUserInput;
    connect?: Prisma.Provider_profileWhereUniqueInput;
};
export type Provider_profileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.Provider_profileCreateWithoutUserInput, Prisma.Provider_profileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.Provider_profileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.Provider_profileUpsertWithoutUserInput;
    disconnect?: Prisma.Provider_profileWhereInput | boolean;
    delete?: Prisma.Provider_profileWhereInput | boolean;
    connect?: Prisma.Provider_profileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Provider_profileUpdateToOneWithWhereWithoutUserInput, Prisma.Provider_profileUpdateWithoutUserInput>, Prisma.Provider_profileUncheckedUpdateWithoutUserInput>;
};
export type Provider_profileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.Provider_profileCreateWithoutUserInput, Prisma.Provider_profileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.Provider_profileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.Provider_profileUpsertWithoutUserInput;
    disconnect?: Prisma.Provider_profileWhereInput | boolean;
    delete?: Prisma.Provider_profileWhereInput | boolean;
    connect?: Prisma.Provider_profileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Provider_profileUpdateToOneWithWhereWithoutUserInput, Prisma.Provider_profileUpdateWithoutUserInput>, Prisma.Provider_profileUncheckedUpdateWithoutUserInput>;
};
export type Provider_profileCreateWithoutMealsInput = {
    id?: string;
    businessName: string;
    address: string;
    isVerified?: boolean;
    logoUrl?: string | null;
    deliveryFee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutProviderInput;
    user: Prisma.UserCreateNestedOneWithoutProviderProfilesInput;
};
export type Provider_profileUncheckedCreateWithoutMealsInput = {
    id?: string;
    userId: string;
    businessName: string;
    address: string;
    isVerified?: boolean;
    logoUrl?: string | null;
    deliveryFee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutProviderInput;
};
export type Provider_profileCreateOrConnectWithoutMealsInput = {
    where: Prisma.Provider_profileWhereUniqueInput;
    create: Prisma.XOR<Prisma.Provider_profileCreateWithoutMealsInput, Prisma.Provider_profileUncheckedCreateWithoutMealsInput>;
};
export type Provider_profileUpsertWithoutMealsInput = {
    update: Prisma.XOR<Prisma.Provider_profileUpdateWithoutMealsInput, Prisma.Provider_profileUncheckedUpdateWithoutMealsInput>;
    create: Prisma.XOR<Prisma.Provider_profileCreateWithoutMealsInput, Prisma.Provider_profileUncheckedCreateWithoutMealsInput>;
    where?: Prisma.Provider_profileWhereInput;
};
export type Provider_profileUpdateToOneWithWhereWithoutMealsInput = {
    where?: Prisma.Provider_profileWhereInput;
    data: Prisma.XOR<Prisma.Provider_profileUpdateWithoutMealsInput, Prisma.Provider_profileUncheckedUpdateWithoutMealsInput>;
};
export type Provider_profileUpdateWithoutMealsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutProviderNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutProviderProfilesNestedInput;
};
export type Provider_profileUncheckedUpdateWithoutMealsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutProviderNestedInput;
};
export type Provider_profileCreateWithoutOrdersInput = {
    id?: string;
    businessName: string;
    address: string;
    isVerified?: boolean;
    logoUrl?: string | null;
    deliveryFee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    meals?: Prisma.MealCreateNestedManyWithoutProviderInput;
    user: Prisma.UserCreateNestedOneWithoutProviderProfilesInput;
};
export type Provider_profileUncheckedCreateWithoutOrdersInput = {
    id?: string;
    userId: string;
    businessName: string;
    address: string;
    isVerified?: boolean;
    logoUrl?: string | null;
    deliveryFee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    meals?: Prisma.MealUncheckedCreateNestedManyWithoutProviderInput;
};
export type Provider_profileCreateOrConnectWithoutOrdersInput = {
    where: Prisma.Provider_profileWhereUniqueInput;
    create: Prisma.XOR<Prisma.Provider_profileCreateWithoutOrdersInput, Prisma.Provider_profileUncheckedCreateWithoutOrdersInput>;
};
export type Provider_profileUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.Provider_profileUpdateWithoutOrdersInput, Prisma.Provider_profileUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.Provider_profileCreateWithoutOrdersInput, Prisma.Provider_profileUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.Provider_profileWhereInput;
};
export type Provider_profileUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.Provider_profileWhereInput;
    data: Prisma.XOR<Prisma.Provider_profileUpdateWithoutOrdersInput, Prisma.Provider_profileUncheckedUpdateWithoutOrdersInput>;
};
export type Provider_profileUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meals?: Prisma.MealUpdateManyWithoutProviderNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutProviderProfilesNestedInput;
};
export type Provider_profileUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meals?: Prisma.MealUncheckedUpdateManyWithoutProviderNestedInput;
};
export type Provider_profileCreateWithoutUserInput = {
    id?: string;
    businessName: string;
    address: string;
    isVerified?: boolean;
    logoUrl?: string | null;
    deliveryFee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    meals?: Prisma.MealCreateNestedManyWithoutProviderInput;
    orders?: Prisma.OrderCreateNestedManyWithoutProviderInput;
};
export type Provider_profileUncheckedCreateWithoutUserInput = {
    id?: string;
    businessName: string;
    address: string;
    isVerified?: boolean;
    logoUrl?: string | null;
    deliveryFee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    meals?: Prisma.MealUncheckedCreateNestedManyWithoutProviderInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutProviderInput;
};
export type Provider_profileCreateOrConnectWithoutUserInput = {
    where: Prisma.Provider_profileWhereUniqueInput;
    create: Prisma.XOR<Prisma.Provider_profileCreateWithoutUserInput, Prisma.Provider_profileUncheckedCreateWithoutUserInput>;
};
export type Provider_profileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.Provider_profileUpdateWithoutUserInput, Prisma.Provider_profileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.Provider_profileCreateWithoutUserInput, Prisma.Provider_profileUncheckedCreateWithoutUserInput>;
    where?: Prisma.Provider_profileWhereInput;
};
export type Provider_profileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.Provider_profileWhereInput;
    data: Prisma.XOR<Prisma.Provider_profileUpdateWithoutUserInput, Prisma.Provider_profileUncheckedUpdateWithoutUserInput>;
};
export type Provider_profileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meals?: Prisma.MealUpdateManyWithoutProviderNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutProviderNestedInput;
};
export type Provider_profileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meals?: Prisma.MealUncheckedUpdateManyWithoutProviderNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutProviderNestedInput;
};
/**
 * Count Type Provider_profileCountOutputType
 */
export type Provider_profileCountOutputType = {
    meals: number;
    orders: number;
};
export type Provider_profileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    meals?: boolean | Provider_profileCountOutputTypeCountMealsArgs;
    orders?: boolean | Provider_profileCountOutputTypeCountOrdersArgs;
};
/**
 * Provider_profileCountOutputType without action
 */
export type Provider_profileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider_profileCountOutputType
     */
    select?: Prisma.Provider_profileCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Provider_profileCountOutputType without action
 */
export type Provider_profileCountOutputTypeCountMealsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MealWhereInput;
};
/**
 * Provider_profileCountOutputType without action
 */
export type Provider_profileCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type Provider_profileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    businessName?: boolean;
    address?: boolean;
    isVerified?: boolean;
    logoUrl?: boolean;
    deliveryFee?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    meals?: boolean | Prisma.Provider_profile$mealsArgs<ExtArgs>;
    orders?: boolean | Prisma.Provider_profile$ordersArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Provider_profileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["provider_profile"]>;
export type Provider_profileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    businessName?: boolean;
    address?: boolean;
    isVerified?: boolean;
    logoUrl?: boolean;
    deliveryFee?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["provider_profile"]>;
export type Provider_profileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    businessName?: boolean;
    address?: boolean;
    isVerified?: boolean;
    logoUrl?: boolean;
    deliveryFee?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["provider_profile"]>;
export type Provider_profileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    businessName?: boolean;
    address?: boolean;
    isVerified?: boolean;
    logoUrl?: boolean;
    deliveryFee?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type Provider_profileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "businessName" | "address" | "isVerified" | "logoUrl" | "deliveryFee" | "createdAt" | "updatedAt", ExtArgs["result"]["provider_profile"]>;
export type Provider_profileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    meals?: boolean | Prisma.Provider_profile$mealsArgs<ExtArgs>;
    orders?: boolean | Prisma.Provider_profile$ordersArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Provider_profileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type Provider_profileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type Provider_profileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $Provider_profilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Provider_profile";
    objects: {
        meals: Prisma.$MealPayload<ExtArgs>[];
        orders: Prisma.$OrderPayload<ExtArgs>[];
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        businessName: string;
        address: string;
        isVerified: boolean;
        logoUrl: string | null;
        deliveryFee: runtime.Decimal;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["provider_profile"]>;
    composites: {};
};
export type Provider_profileGetPayload<S extends boolean | null | undefined | Provider_profileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Provider_profilePayload, S>;
export type Provider_profileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Provider_profileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Provider_profileCountAggregateInputType | true;
};
export interface Provider_profileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Provider_profile'];
        meta: {
            name: 'Provider_profile';
        };
    };
    /**
     * Find zero or one Provider_profile that matches the filter.
     * @param {Provider_profileFindUniqueArgs} args - Arguments to find a Provider_profile
     * @example
     * // Get one Provider_profile
     * const provider_profile = await prisma.provider_profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Provider_profileFindUniqueArgs>(args: Prisma.SelectSubset<T, Provider_profileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Provider_profileClient<runtime.Types.Result.GetResult<Prisma.$Provider_profilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Provider_profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Provider_profileFindUniqueOrThrowArgs} args - Arguments to find a Provider_profile
     * @example
     * // Get one Provider_profile
     * const provider_profile = await prisma.provider_profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Provider_profileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Provider_profileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Provider_profileClient<runtime.Types.Result.GetResult<Prisma.$Provider_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Provider_profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Provider_profileFindFirstArgs} args - Arguments to find a Provider_profile
     * @example
     * // Get one Provider_profile
     * const provider_profile = await prisma.provider_profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Provider_profileFindFirstArgs>(args?: Prisma.SelectSubset<T, Provider_profileFindFirstArgs<ExtArgs>>): Prisma.Prisma__Provider_profileClient<runtime.Types.Result.GetResult<Prisma.$Provider_profilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Provider_profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Provider_profileFindFirstOrThrowArgs} args - Arguments to find a Provider_profile
     * @example
     * // Get one Provider_profile
     * const provider_profile = await prisma.provider_profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Provider_profileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Provider_profileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Provider_profileClient<runtime.Types.Result.GetResult<Prisma.$Provider_profilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Provider_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Provider_profileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provider_profiles
     * const provider_profiles = await prisma.provider_profile.findMany()
     *
     * // Get first 10 Provider_profiles
     * const provider_profiles = await prisma.provider_profile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const provider_profileWithIdOnly = await prisma.provider_profile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends Provider_profileFindManyArgs>(args?: Prisma.SelectSubset<T, Provider_profileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Provider_profilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Provider_profile.
     * @param {Provider_profileCreateArgs} args - Arguments to create a Provider_profile.
     * @example
     * // Create one Provider_profile
     * const Provider_profile = await prisma.provider_profile.create({
     *   data: {
     *     // ... data to create a Provider_profile
     *   }
     * })
     *
     */
    create<T extends Provider_profileCreateArgs>(args: Prisma.SelectSubset<T, Provider_profileCreateArgs<ExtArgs>>): Prisma.Prisma__Provider_profileClient<runtime.Types.Result.GetResult<Prisma.$Provider_profilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Provider_profiles.
     * @param {Provider_profileCreateManyArgs} args - Arguments to create many Provider_profiles.
     * @example
     * // Create many Provider_profiles
     * const provider_profile = await prisma.provider_profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Provider_profileCreateManyArgs>(args?: Prisma.SelectSubset<T, Provider_profileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Provider_profiles and returns the data saved in the database.
     * @param {Provider_profileCreateManyAndReturnArgs} args - Arguments to create many Provider_profiles.
     * @example
     * // Create many Provider_profiles
     * const provider_profile = await prisma.provider_profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Provider_profiles and only return the `id`
     * const provider_profileWithIdOnly = await prisma.provider_profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Provider_profileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Provider_profileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Provider_profilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Provider_profile.
     * @param {Provider_profileDeleteArgs} args - Arguments to delete one Provider_profile.
     * @example
     * // Delete one Provider_profile
     * const Provider_profile = await prisma.provider_profile.delete({
     *   where: {
     *     // ... filter to delete one Provider_profile
     *   }
     * })
     *
     */
    delete<T extends Provider_profileDeleteArgs>(args: Prisma.SelectSubset<T, Provider_profileDeleteArgs<ExtArgs>>): Prisma.Prisma__Provider_profileClient<runtime.Types.Result.GetResult<Prisma.$Provider_profilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Provider_profile.
     * @param {Provider_profileUpdateArgs} args - Arguments to update one Provider_profile.
     * @example
     * // Update one Provider_profile
     * const provider_profile = await prisma.provider_profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Provider_profileUpdateArgs>(args: Prisma.SelectSubset<T, Provider_profileUpdateArgs<ExtArgs>>): Prisma.Prisma__Provider_profileClient<runtime.Types.Result.GetResult<Prisma.$Provider_profilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Provider_profiles.
     * @param {Provider_profileDeleteManyArgs} args - Arguments to filter Provider_profiles to delete.
     * @example
     * // Delete a few Provider_profiles
     * const { count } = await prisma.provider_profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Provider_profileDeleteManyArgs>(args?: Prisma.SelectSubset<T, Provider_profileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Provider_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Provider_profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provider_profiles
     * const provider_profile = await prisma.provider_profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Provider_profileUpdateManyArgs>(args: Prisma.SelectSubset<T, Provider_profileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Provider_profiles and returns the data updated in the database.
     * @param {Provider_profileUpdateManyAndReturnArgs} args - Arguments to update many Provider_profiles.
     * @example
     * // Update many Provider_profiles
     * const provider_profile = await prisma.provider_profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Provider_profiles and only return the `id`
     * const provider_profileWithIdOnly = await prisma.provider_profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends Provider_profileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Provider_profileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Provider_profilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Provider_profile.
     * @param {Provider_profileUpsertArgs} args - Arguments to update or create a Provider_profile.
     * @example
     * // Update or create a Provider_profile
     * const provider_profile = await prisma.provider_profile.upsert({
     *   create: {
     *     // ... data to create a Provider_profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider_profile we want to update
     *   }
     * })
     */
    upsert<T extends Provider_profileUpsertArgs>(args: Prisma.SelectSubset<T, Provider_profileUpsertArgs<ExtArgs>>): Prisma.Prisma__Provider_profileClient<runtime.Types.Result.GetResult<Prisma.$Provider_profilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Provider_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Provider_profileCountArgs} args - Arguments to filter Provider_profiles to count.
     * @example
     * // Count the number of Provider_profiles
     * const count = await prisma.provider_profile.count({
     *   where: {
     *     // ... the filter for the Provider_profiles we want to count
     *   }
     * })
    **/
    count<T extends Provider_profileCountArgs>(args?: Prisma.Subset<T, Provider_profileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Provider_profileCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Provider_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Provider_profileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Provider_profileAggregateArgs>(args: Prisma.Subset<T, Provider_profileAggregateArgs>): Prisma.PrismaPromise<GetProvider_profileAggregateType<T>>;
    /**
     * Group by Provider_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Provider_profileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends Provider_profileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Provider_profileGroupByArgs['orderBy'];
    } : {
        orderBy?: Provider_profileGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Provider_profileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvider_profileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Provider_profile model
     */
    readonly fields: Provider_profileFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Provider_profile.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Provider_profileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    meals<T extends Prisma.Provider_profile$mealsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Provider_profile$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orders<T extends Prisma.Provider_profile$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Provider_profile$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Provider_profile model
 */
export interface Provider_profileFieldRefs {
    readonly id: Prisma.FieldRef<"Provider_profile", 'String'>;
    readonly userId: Prisma.FieldRef<"Provider_profile", 'String'>;
    readonly businessName: Prisma.FieldRef<"Provider_profile", 'String'>;
    readonly address: Prisma.FieldRef<"Provider_profile", 'String'>;
    readonly isVerified: Prisma.FieldRef<"Provider_profile", 'Boolean'>;
    readonly logoUrl: Prisma.FieldRef<"Provider_profile", 'String'>;
    readonly deliveryFee: Prisma.FieldRef<"Provider_profile", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"Provider_profile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Provider_profile", 'DateTime'>;
}
/**
 * Provider_profile findUnique
 */
export type Provider_profileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider_profile
     */
    select?: Prisma.Provider_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider_profile
     */
    omit?: Prisma.Provider_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Provider_profileInclude<ExtArgs> | null;
    /**
     * Filter, which Provider_profile to fetch.
     */
    where: Prisma.Provider_profileWhereUniqueInput;
};
/**
 * Provider_profile findUniqueOrThrow
 */
export type Provider_profileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider_profile
     */
    select?: Prisma.Provider_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider_profile
     */
    omit?: Prisma.Provider_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Provider_profileInclude<ExtArgs> | null;
    /**
     * Filter, which Provider_profile to fetch.
     */
    where: Prisma.Provider_profileWhereUniqueInput;
};
/**
 * Provider_profile findFirst
 */
export type Provider_profileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider_profile
     */
    select?: Prisma.Provider_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider_profile
     */
    omit?: Prisma.Provider_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Provider_profileInclude<ExtArgs> | null;
    /**
     * Filter, which Provider_profile to fetch.
     */
    where?: Prisma.Provider_profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Provider_profiles to fetch.
     */
    orderBy?: Prisma.Provider_profileOrderByWithRelationInput | Prisma.Provider_profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Provider_profiles.
     */
    cursor?: Prisma.Provider_profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Provider_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Provider_profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Provider_profiles.
     */
    distinct?: Prisma.Provider_profileScalarFieldEnum | Prisma.Provider_profileScalarFieldEnum[];
};
/**
 * Provider_profile findFirstOrThrow
 */
export type Provider_profileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider_profile
     */
    select?: Prisma.Provider_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider_profile
     */
    omit?: Prisma.Provider_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Provider_profileInclude<ExtArgs> | null;
    /**
     * Filter, which Provider_profile to fetch.
     */
    where?: Prisma.Provider_profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Provider_profiles to fetch.
     */
    orderBy?: Prisma.Provider_profileOrderByWithRelationInput | Prisma.Provider_profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Provider_profiles.
     */
    cursor?: Prisma.Provider_profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Provider_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Provider_profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Provider_profiles.
     */
    distinct?: Prisma.Provider_profileScalarFieldEnum | Prisma.Provider_profileScalarFieldEnum[];
};
/**
 * Provider_profile findMany
 */
export type Provider_profileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider_profile
     */
    select?: Prisma.Provider_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider_profile
     */
    omit?: Prisma.Provider_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Provider_profileInclude<ExtArgs> | null;
    /**
     * Filter, which Provider_profiles to fetch.
     */
    where?: Prisma.Provider_profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Provider_profiles to fetch.
     */
    orderBy?: Prisma.Provider_profileOrderByWithRelationInput | Prisma.Provider_profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Provider_profiles.
     */
    cursor?: Prisma.Provider_profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Provider_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Provider_profiles.
     */
    skip?: number;
    distinct?: Prisma.Provider_profileScalarFieldEnum | Prisma.Provider_profileScalarFieldEnum[];
};
/**
 * Provider_profile create
 */
export type Provider_profileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider_profile
     */
    select?: Prisma.Provider_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider_profile
     */
    omit?: Prisma.Provider_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Provider_profileInclude<ExtArgs> | null;
    /**
     * The data needed to create a Provider_profile.
     */
    data: Prisma.XOR<Prisma.Provider_profileCreateInput, Prisma.Provider_profileUncheckedCreateInput>;
};
/**
 * Provider_profile createMany
 */
export type Provider_profileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Provider_profiles.
     */
    data: Prisma.Provider_profileCreateManyInput | Prisma.Provider_profileCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Provider_profile createManyAndReturn
 */
export type Provider_profileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider_profile
     */
    select?: Prisma.Provider_profileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider_profile
     */
    omit?: Prisma.Provider_profileOmit<ExtArgs> | null;
    /**
     * The data used to create many Provider_profiles.
     */
    data: Prisma.Provider_profileCreateManyInput | Prisma.Provider_profileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Provider_profileIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Provider_profile update
 */
export type Provider_profileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider_profile
     */
    select?: Prisma.Provider_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider_profile
     */
    omit?: Prisma.Provider_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Provider_profileInclude<ExtArgs> | null;
    /**
     * The data needed to update a Provider_profile.
     */
    data: Prisma.XOR<Prisma.Provider_profileUpdateInput, Prisma.Provider_profileUncheckedUpdateInput>;
    /**
     * Choose, which Provider_profile to update.
     */
    where: Prisma.Provider_profileWhereUniqueInput;
};
/**
 * Provider_profile updateMany
 */
export type Provider_profileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Provider_profiles.
     */
    data: Prisma.XOR<Prisma.Provider_profileUpdateManyMutationInput, Prisma.Provider_profileUncheckedUpdateManyInput>;
    /**
     * Filter which Provider_profiles to update
     */
    where?: Prisma.Provider_profileWhereInput;
    /**
     * Limit how many Provider_profiles to update.
     */
    limit?: number;
};
/**
 * Provider_profile updateManyAndReturn
 */
export type Provider_profileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider_profile
     */
    select?: Prisma.Provider_profileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider_profile
     */
    omit?: Prisma.Provider_profileOmit<ExtArgs> | null;
    /**
     * The data used to update Provider_profiles.
     */
    data: Prisma.XOR<Prisma.Provider_profileUpdateManyMutationInput, Prisma.Provider_profileUncheckedUpdateManyInput>;
    /**
     * Filter which Provider_profiles to update
     */
    where?: Prisma.Provider_profileWhereInput;
    /**
     * Limit how many Provider_profiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Provider_profileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Provider_profile upsert
 */
export type Provider_profileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider_profile
     */
    select?: Prisma.Provider_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider_profile
     */
    omit?: Prisma.Provider_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Provider_profileInclude<ExtArgs> | null;
    /**
     * The filter to search for the Provider_profile to update in case it exists.
     */
    where: Prisma.Provider_profileWhereUniqueInput;
    /**
     * In case the Provider_profile found by the `where` argument doesn't exist, create a new Provider_profile with this data.
     */
    create: Prisma.XOR<Prisma.Provider_profileCreateInput, Prisma.Provider_profileUncheckedCreateInput>;
    /**
     * In case the Provider_profile was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Provider_profileUpdateInput, Prisma.Provider_profileUncheckedUpdateInput>;
};
/**
 * Provider_profile delete
 */
export type Provider_profileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider_profile
     */
    select?: Prisma.Provider_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider_profile
     */
    omit?: Prisma.Provider_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Provider_profileInclude<ExtArgs> | null;
    /**
     * Filter which Provider_profile to delete.
     */
    where: Prisma.Provider_profileWhereUniqueInput;
};
/**
 * Provider_profile deleteMany
 */
export type Provider_profileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Provider_profiles to delete
     */
    where?: Prisma.Provider_profileWhereInput;
    /**
     * Limit how many Provider_profiles to delete.
     */
    limit?: number;
};
/**
 * Provider_profile.meals
 */
export type Provider_profile$mealsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: Prisma.MealSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Meal
     */
    omit?: Prisma.MealOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MealInclude<ExtArgs> | null;
    where?: Prisma.MealWhereInput;
    orderBy?: Prisma.MealOrderByWithRelationInput | Prisma.MealOrderByWithRelationInput[];
    cursor?: Prisma.MealWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MealScalarFieldEnum | Prisma.MealScalarFieldEnum[];
};
/**
 * Provider_profile.orders
 */
export type Provider_profile$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * Provider_profile without action
 */
export type Provider_profileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider_profile
     */
    select?: Prisma.Provider_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider_profile
     */
    omit?: Prisma.Provider_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Provider_profileInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Provider_profile.d.ts.map