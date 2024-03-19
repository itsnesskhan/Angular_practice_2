import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { ViewChildComponent } from './view-child/view-child.component';
import products from 'razorpay/dist/types/products';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'view-child', component:ViewChildComponent},
  {path:'products', component:ProductsComponent},
  {path:'payment', component:PaymentGatewayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
