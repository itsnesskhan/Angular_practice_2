import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductWidgetComponent } from './products/product-widget/product-widget.component';
import { NgDoCheckComponent } from './hooks/ng-do-check/ng-do-check.component';
import { RefreshPageComponent } from './refresh-page/refresh-page.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductWidgetComponent,
    NgDoCheckComponent,
    RefreshPageComponent,
    ViewChildComponent,
    PaymentGatewayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
