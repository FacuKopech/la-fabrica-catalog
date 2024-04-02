import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import mediumZoom from 'medium-zoom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }
  @ViewChild('productsImgSliderComponent') productsImgSliderComponentRef!: ElementRef;
  @ViewChild('worksImgSliderComponent') worksImgSliderComponentRef!: ElementRef;
  @ViewChild('imgModal', { static: false }) imgModal!: ElementRef<HTMLImageElement>;
  @ViewChild('myModal', { static: false }) myModal!: ElementRef<HTMLElement>;
  isPopupVisible = false;
  isImgPopupVisible = false;
  isProductsSlider: boolean = false;
  imgSrc: string = "";
  isListVisible = false;

  toggleNav() {
    this.isListVisible = !this.isListVisible;
  }

  closeNav() {
    this.isListVisible = false;
  }
  ngOnInit(): void {
    const buttons = document.querySelectorAll('.navButton');
    const sideNavButtons = document.querySelectorAll('.liElement');
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const targetId = button.getAttribute('data-target');
        const targetSection = targetId ? document.getElementById(targetId) : null;

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
    sideNavButtons.forEach(button => {
      button.addEventListener('click', function () {
        const targetId = button.getAttribute('data-target');
        const targetSection = targetId ? document.getElementById(targetId) : null;

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }
  ngAfterViewInit() {
    if (this.productsImgSliderComponentRef) {
      const secondComponentHtmlElement = this.productsImgSliderComponentRef.nativeElement;
      secondComponentHtmlElement?.addEventListener('openPopupProducts', (event: Event) => {
        const customEvent = event as CustomEvent<string>;
        this.openPopupProducts(customEvent.detail);
      });
    }

    if (this.worksImgSliderComponentRef) {
      const secondComponentHtmlElement = this.worksImgSliderComponentRef.nativeElement;
      secondComponentHtmlElement?.addEventListener('openPopupWorks', (event: Event) => {
        const customEvent = event as CustomEvent<string>;
        this.openPopupWorks(customEvent.detail);
      });
    }
  }

  openPopupProducts(imgSrc: string) {
    this.isImgPopupVisible = true;
    this.imgSrc = imgSrc;
    this.isProductsSlider = true;
  }

  openPopupWorks(imgSrc: string) {
    this.isImgPopupVisible = true;
    this.imgSrc = imgSrc;
    this.isProductsSlider = false;
  }

  closePopup() {
    this.isImgPopupVisible = false;
  }

  ngAfterViewChecked() {
    if (this.isImgPopupVisible && this.imgModal && this.myModal) {
      this.myModal.nativeElement.style.display = "flex";
      if (this.isProductsSlider) {
        this.imgModal.nativeElement.src = `../assets/products/${this.imgSrc}`;
      } else {
        this.imgModal.nativeElement.src = `../assets/work/${this.imgSrc}`;
      }
      this.imgModal.nativeElement.addEventListener('click', this.clickHandler);
    }
  }

   clickHandler = () => {
    if (this.imgModal.nativeElement.classList.contains('zoomedIn')) {
      this.imgModal.nativeElement.classList.toggle('zoomedOut');
      this.imgModal.nativeElement.classList.remove('zoomedIn');
      this.imgModal.nativeElement.style.cursor = "zoom-in";
    } else {
      this.imgModal.nativeElement.classList.toggle('zoomedIn');
      this.imgModal.nativeElement.classList.remove('zoomedOut');
      this.imgModal.nativeElement.style.cursor = "zoom-out";
    }
  };
}
