import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, filter, map, Observable, of } from "rxjs";
import { ProductCategoryResource, ProductResource, ProductVariantResource } from "../models/product";
import { GlobalSearchElement, E_GLOBAL_SEARCH_ELEMENT_TYPE } from "../models/search";
import { ProductCategoryService } from "./product-category.service";
import { ProductVariantService } from "./product-variant.service";
import { ProductService } from "./product.service";

@Injectable({
    providedIn: 'root',
})
export class GlobalSearchService {
    private productCategories$: Observable<ProductCategoryResource[]> = of([]);
    private products$: Observable<ProductResource[]> = of([]);
    private productVariants$: Observable<ProductVariantResource[]> = of([]);

    private searchElementsSubject = new BehaviorSubject<GlobalSearchElement[]>([]);
    private searchElements$ = this.searchElementsSubject.asObservable();

    private searchResultsSubject = new BehaviorSubject<GlobalSearchElement[]>([]);
    searchResults$ = this.searchResultsSubject.asObservable();

    constructor() {
        this.productCategories$ = inject(ProductCategoryService).list();
        this.products$ = inject(ProductService).list();
        this.productVariants$ = inject(ProductVariantService).list();

        // This combines all the search locations into one.
        combineLatest([this.productCategories$, this.products$, this.productVariants$])
            .pipe(
                map(([productCategories, products, productVariants]) => {
                    const searchElements: GlobalSearchElement[] = [];

                    // Product Categories
                    productCategories.forEach(category => {
                        searchElements.push({ uid: category.uid, name: category.name, search_element_type: E_GLOBAL_SEARCH_ELEMENT_TYPE.PRODUCT_CATEGORY });
                    });

                    // Products
                    products.forEach(product => {
                        searchElements.push({ uid: product.uid, name: product.name, search_element_type: E_GLOBAL_SEARCH_ELEMENT_TYPE.PRODUCT });
                    });

                    // Product Variants
                    productVariants.forEach(variant => {
                        searchElements.push({ uid: variant.uid, name: variant.name, search_element_type: E_GLOBAL_SEARCH_ELEMENT_TYPE.PRODUCT_VARIANT });
                    });

                    return searchElements;
                })
            ).subscribe({
                next: (elements) => {
                    this.searchElementsSubject.next(elements);
                },
            });
    }

    onSearch(searchText: string | undefined) {
        this.searchElements$.pipe(
            map(data => {
                if (!searchText) {
                    return [];
                }

                const search_text = searchText.toLowerCase();
                if (search_text == '') {
                    return data;
                }

                const filteredData = data.filter(item => {
                    return item.name.toLowerCase().includes(search_text);
                });

                return filteredData;
            }),
        ).subscribe({
            next: (elements) => {
                this.searchResultsSubject.next(elements);
            },
        });
    }
}