export interface ProductCategoryResource {
    uid: string;
    name: string;
    description: string;
    // relations
    products?: ProductResource[];
}

export interface ProductResource {
    uid: string;
    name: string;
    // relations
    category_uid: string;
    variants?: ProductVariantResource[];
}

export interface ProductVariantResource {
    uid: string;
    name: string;
    price: number;
    // relations
    product_uid: string;
}