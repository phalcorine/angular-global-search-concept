import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCategoryResource } from 'src/app/models/product';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  templateUrl: './product-category-detail-page.component.html',
  styleUrls: ['./product-category-detail-page.component.scss']
})
export class ProductCategoryDetailPageComponent implements OnInit {

  productCategory?: ProductCategoryResource;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productCategoryService: ProductCategoryService,
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe({
        next: (params) => {
          const uid = params['uid'];
          this.productCategoryService.findByUid(uid)
            .subscribe({
              next: (productCategory) => {
                this.productCategory = productCategory;
              },
            });
        },
      });
  }

}
