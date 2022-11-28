import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryDetailPageComponent } from './pages/product-category-detail-page/product-category-detail-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductVariantDetailPageComponent } from './pages/product-variant-detail-page/product-variant-detail-page.component';

const routes: Routes = [
  {
    path: 'product-category/detail/:uid',
    component: ProductCategoryDetailPageComponent,
  },
  {
    path: 'product/detail/:uid',
    component: ProductDetailPageComponent,
  },
  {
    path: 'product-variant/detail/:uid',
    component: ProductVariantDetailPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
