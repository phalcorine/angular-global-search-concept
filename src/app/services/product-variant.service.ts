import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { ProductResource, ProductVariantResource } from "../models/product";

@Injectable({
    providedIn: 'root',
})
export class ProductVariantService {

    list(): Observable<ProductVariantResource[]> {
        return of(this._getData())
            .pipe(
                delay(6500),
            );
    }

    findByUid(uid: string): Observable<ProductVariantResource> {
        const productVariant = this._getData().find(item => item.uid == uid);
        if (!productVariant) {
            throw new Error(`A product variant with the specified ID: ${uid} was not found!`);
        }

        return of(productVariant);
    }

    private _getData(): ProductVariantResource[] {
        return [
            { uid: 'PV001', name: 'Dell XPS L502x', price: 150000, product_uid: 'P001' },
            { uid: 'PV002', name: 'Dell XPS 15 (2022)', price: 800000, product_uid: 'P001' },
            { uid: 'PV003', name: 'Samsung Galaxy S10 (3GB/64GB)', price: 100000, product_uid: 'P002' },
            { uid: 'PV004', name: 'Samsung Galaxy S10 (4GB/128GB)', price: 130000, product_uid: 'P002' },
            { uid: 'PV005', name: 'Sony PlayStation 5 (500GB)', price: 400000, product_uid: 'P003' },
            { uid: 'PV006', name: 'Sony PlayStation 5 (1TB)', price: 450000, product_uid: 'P003' },
            { uid: 'PV007', name: 'Microsoft Xbox One (500GB)', price: 350000, product_uid: 'P004' },
            { uid: 'PV008', name: 'Microsoft Xbox One (1TB)', price: 400000, product_uid: 'P004' },
            { uid: 'PV009', name: 'Redmi 10A (3GB/64GB)', price: 75000, product_uid: 'P005' },
            { uid: 'PV010', name: 'Redmi 10A (4GB/128GB)', price: 100000, product_uid: 'P005' },
            { uid: 'PV011', name: 'Lenovo Thinkpad (2019)', price: 400000, product_uid: 'P006' },
            { uid: 'PV012', name: 'Lenovo Thinkpad (2021)', price: 500000, product_uid: 'P006' },
        ];
    }
}