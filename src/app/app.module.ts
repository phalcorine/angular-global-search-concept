import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AutoCompleteModule } from 'primeng/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalSearchComponent } from './components/global-search/global-search.component';
import { ProductCategoryDetailPageComponent } from './pages/product-category-detail-page/product-category-detail-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductVariantDetailPageComponent } from './pages/product-variant-detail-page/product-variant-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalSearchComponent,
    ProductCategoryDetailPageComponent,
    ProductDetailPageComponent,
    ProductVariantDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AutoCompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
