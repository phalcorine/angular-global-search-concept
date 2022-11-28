import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { ProductResource } from "../models/product";

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    list(): Observable<ProductResource[]> {
        return of(this._getData())
            .pipe(
                delay(5000),
            );
    }

    findByUid(uid: string): Observable<ProductResource> {
        const product = this._getData().find(item => item.uid == uid);
        if (!product) {
            throw new Error(`A product with the specified ID: ${uid} was not found!`);
        }

        return of(product);
    }

    private _getData(): ProductResource[] {
        return [
            { uid: 'P001', name: 'Dell XPS', category_uid: 'C001' },
            { uid: 'P002', name: 'Samsung Galaxy S10', category_uid: 'C002' },
            { uid: 'P003', name: 'Sony PlayStation 5', category_uid: 'C003' },
            { uid: 'P004', name: 'Microsoft Xbox One', category_uid: 'C003' },
            { uid: 'P005', name: 'Redmi 10A', category_uid: 'C002' },
            { uid: 'P006', name: 'Lenovo Thinkpad', category_uid: 'C001' },
        ];
    }
}