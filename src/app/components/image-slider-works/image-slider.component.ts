import { Component, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
 
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  @Output() openPopupWorks = new EventEmitter<string>();

  ngAfterViewInit() {
    const slider = this.elementRef.nativeElement.querySelector('.slider-works');

    const activate = (e: MouseEvent) => {
      const items = this.elementRef.nativeElement.querySelectorAll('.item');
      if ((<HTMLElement>e.target).matches('.next-work')) {
        this.renderer.appendChild(slider, items[0]);
      }
      if ((<HTMLElement>e.target).matches('.prev-work')) {
        this.renderer.insertBefore(slider, items[items.length - 1], slider.firstChild);
      }
    };

    document.addEventListener('click', activate, false);
  }
 
  onClick(imgSrc: string) {
    this.openPopupWorks.emit(imgSrc);
  }
}
