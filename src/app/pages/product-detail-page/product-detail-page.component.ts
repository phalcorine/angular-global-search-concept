import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductResource } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {

  product?: ProductResource;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productCategoryService: ProductService,
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe({
        next: (params) => {
          const uid = params['uid'];
          this.productCategoryService.findByUid(uid)
            .subscribe({
              next: (product) => {
                this.product = product;
              },
            });
        },
      });
  }

}
