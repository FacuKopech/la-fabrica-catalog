import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsInfoPopupComponent } from './products-info-popup.component';

describe('ProductsInfoPopupComponent', () => {
  let component: ProductsInfoPopupComponent;
  let fixture: ComponentFixture<ProductsInfoPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsInfoPopupComponent]
    });
    fixture = TestBed.createComponent(ProductsInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
