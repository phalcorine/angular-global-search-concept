export interface GlobalSearchElement {
    uid: string;
    name: string;
    search_element_type: string;
}

export enum E_GLOBAL_SEARCH_ELEMENT_TYPE {
    PRODUCT_CATEGORY = 'product-category',
    PRODUCT = 'product',
    PRODUCT_VARIANT = 'product-variant',
}

export interface PrimeNgAutoCompleteSearchEvent {
    query: string;
}