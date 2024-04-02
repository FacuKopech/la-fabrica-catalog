import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-info-popup',
  templateUrl: './products-info-popup.component.html',
  styleUrls: ['./products-info-popup.component.css']
})
export class ProductsInfoPopupComponent {
  @Output() closePopup = new EventEmitter<void>();
  onCloseClick() {
    this.closePopup.emit();
  }
}
