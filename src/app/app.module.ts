import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSliderComponent } from './components/image-slider-works/image-slider.component';
import { IonicModule } from '@ionic/angular';
import { ImageSliderProductsComponent } from './components/image-slider-products/image-slider-products.component';
import { ProductsInfoPopupComponent } from './popups/products-info-popup/products-info-popup.component';
import { WorkDetailsPopupComponent } from './popups/work-details-popup/work-details-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    ImageSliderProductsComponent,
    ProductsInfoPopupComponent,
    WorkDetailsPopupComponent
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
