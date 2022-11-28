import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVariantDetailPageComponent } from './product-variant-detail-page.component';

describe('ProductVariantDetailPageComponent', () => {
  let component: ProductVariantDetailPageComponent;
  let fixture: ComponentFixture<ProductVariantDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductVariantDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductVariantDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
