import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  purchaseCoupon(coupon: Coupon) {
    return this.httpClient.post("http://localhost:8080/customer/purchaseCoupon", coupon);
  }

  getCustomerCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/customer/getCustomerCoupons");
  }

  getCustomerCouponsByCategory(category: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/customer/getCustomerCouponsByCategory", { params: new HttpParams().set('category', category) });
  }

  getCustomerCouponsByPrice(maxPrice: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/customer/getCustomerCouponsByPrice", { params: new HttpParams().set('maxPrice', maxPrice.toString()) });
  }

  getCustomerDetails(): Observable<Customer> {
    return this.httpClient.get<Customer>("http://localhost:8080/customer/getCustomerDetails");
  }

  getAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/customer/getAllCoupons");
  }

}
