import { Component } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public products = [
    {id:1,name:"refrigerator",price:1400},
    {id:2,name:"Ac",price:4300},
    {id:3,name:"Washing Machine",price:3400},
    
  ]

  public topProducts = [
    {id:1,name:"Redmi not 9 pro",price:2400},
    {id:2,name:"One plus 4i",price:6300},
    {id:3,name:"Addidas sneaker",price:320},
    
  ]
}
