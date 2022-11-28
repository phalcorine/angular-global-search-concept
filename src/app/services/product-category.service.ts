import { Injectable } from "@angular/core";
import { delay, map, Observable, of } from "rxjs";
import { ProductCategoryResource } from "../models/product";

@Injectable({
    providedIn: 'root',
})
export class ProductCategoryService {

    list(): Observable<ProductCategoryResource[]> {
        return of(this._getData())
            .pipe(
                delay(3500),
            );
    }

    findByUid(uid: string): Observable<ProductCategoryResource> {
        const productCategory = this._getData().find(item => item.uid == uid);
        if (!productCategory) {
            throw new Error(`A product category with the specified ID: ${uid} was not found!`);
        }

        return of(productCategory);
    }

    private _getData(): ProductCategoryResource[] {
        return [
            { uid: 'C001', name: 'Laptops', description: 'Mobile form factor PCs...' },
            { uid: 'C002', name: 'Mobile Phones', description: 'Phones that are mobile...' },
            { uid: 'C003', name: 'Game Consoles', description: 'Devices used to play video games...' },
        ]
    }
}