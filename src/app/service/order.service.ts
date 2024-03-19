import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

declare var Razorpay: any;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url:string = 'http://localhost:8080/api/payment'

  constructor(private http: HttpClient) {}
  
  createOrderId(amount: number): Observable<String> {
    
    const url = "http://localhost:8080/api/payment/createOrderId/"+amount;
    return this.http.get<any>(url);
  }

  
}
