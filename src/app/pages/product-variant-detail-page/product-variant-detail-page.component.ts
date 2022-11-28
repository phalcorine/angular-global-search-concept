import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductVariantResource } from 'src/app/models/product';
import { ProductVariantService } from 'src/app/services/product-variant.service';

@Component({
  templateUrl: './product-variant-detail-page.component.html',
  styleUrls: ['./product-variant-detail-page.component.scss']
})
export class ProductVariantDetailPageComponent implements OnInit {

  productVariant?: ProductVariantResource;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productCategoryService: ProductVariantService,
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe({
        next: (params) => {
          const uid = params['uid'];
          this.productCategoryService.findByUid(uid)
            .subscribe({
              next: (productVariant) => {
                this.productVariant = productVariant;
              },
            });
        },
      });
  }

}
