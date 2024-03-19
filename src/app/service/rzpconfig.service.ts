import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RzpconfigService {

  rzp_key_id: string = 'rzp_test_I7cUMWTEpZv16Y'; // Replace with your actual key
  rzp_currency: string = 'INR'; // Replace with your actual currency
  rzp_company_name: string = 'Nasspvt.ltd';

  constructor() { }
}
