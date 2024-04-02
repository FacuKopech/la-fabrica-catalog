import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSliderProductsComponent } from './image-slider-products.component';

describe('ImageSliderProductsComponent', () => {
  let component: ImageSliderProductsComponent;
  let fixture: ComponentFixture<ImageSliderProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageSliderProductsComponent]
    });
    fixture = TestBed.createComponent(ImageSliderProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
