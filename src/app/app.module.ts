import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSliderComponent } from './components/image-slider-works/image-slider.component';
import { IonicModule } from '@ionic/angular';
import { ImageSliderProductsComponent } from './components/image-slider-products/image-slider-products.component';
import { ProductsInfoPopupComponent } from './popups/products-info-popup/products-info-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    ImageSliderProductsComponent,
    ProductsInfoPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
