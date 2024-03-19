import { Component } from '@angular/core';
import { OrderService } from '../service/order.service';
import { RzpconfigService } from '../service/rzpconfig.service';
import { NgForm } from '@angular/forms';

declare var Razorpay: any;


@Component({
  selector: 'payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent  {


  form: any = {}; 
  paymentId!: string;
  error!: string;
  amount!:number;

  constructor(private _orderService: OrderService, private rzpConfigService: RzpconfigService) {
    console.log(this.form)
  }
  
  
  
  
  
  onSubmit(){
    this.amount = this.form.amount;
    console.log(this.amount);
    console.log("form data : "+JSON.stringify(this.form))
    this._orderService.createOrderId(this.amount).subscribe({
      next:(orderId:any)=>{
        console.log(orderId);
        this.openCheckout(this.amount, 0, orderId, "")
      },
      error:(error:Error)=>{
        console.log("failed to create order");
        console.log(error);
      }
    })
  }

  openCheckout(amount: number, contactCounts: number, razorpayOrderId: string, description: string): void {
    const totalAmount = amount * 100;


    const options = {
      key: this.rzpConfigService.rzp_key_id,
      amount: totalAmount.toString(),
      currency: this.rzpConfigService.rzp_currency,
      name: this.rzpConfigService.rzp_company_name,
      description: description,
      image: '/assets/users/images/logo.png',
      order_id: razorpayOrderId,
      callback_url: `/api/payment/success/${amount}/${contactCounts}/${this.rzpConfigService.rzp_company_name}/${this.rzpConfigService.rzp_currency}/${description}`,
      notes: {
        description: description,
        company_name: this.rzpConfigService.rzp_company_name,
      },
      theme: {
        color: '#007B8A',
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on('payment.failed', (response:any) => {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    });

    rzp1.open();
  }


}
