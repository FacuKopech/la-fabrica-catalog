import { Component, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-slider-products',
  templateUrl: './image-slider-products.component.html',
  styleUrls: ['./image-slider-products.component.css']
})
export class ImageSliderProductsComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
  @Output() openPopupProducts = new EventEmitter<string>();
  isPopupVisible = false;

  ngAfterViewInit() {
    const slider = this.elementRef.nativeElement.querySelector('.slider-products');

    const activate = (e: MouseEvent) => {
      const items = this.elementRef.nativeElement.querySelectorAll('.item');
      if ((<HTMLElement>e.target).matches('.next-product')) {
        this.renderer.appendChild(slider, items[0]);
      }
      if ((<HTMLElement>e.target).matches('.prev-product')) {
        this.renderer.insertBefore(slider, items[items.length - 1], slider.firstChild);
      }
    };

    document.addEventListener('click', activate, false);
  }

  onClick(imgSrc: string) {
    this.openPopupProducts.emit(imgSrc);
  }
}
