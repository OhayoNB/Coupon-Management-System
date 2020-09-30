import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Coupon } from '../models/coupon.model';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  addCoupon(coupon: Coupon): Observable<any> {
    return this.httpClient.post("http://localhost:8080/company/addCoupon", coupon);
  }

  updateCoupon(coupon: Coupon): Observable<any> {
    return this.httpClient.put("http://localhost:8080/company/updateCoupon", coupon);
  }

  deleteCoupon(id: number) {
    return this.httpClient.delete("http://localhost:8080/company/deleteCoupon/" + id);
  }

  getAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/company/getCompanyCoupons");
  }

  getAllCouponsByCategory(category: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/company/getCompanyCouponsByCategory", { params: new HttpParams().set('category', category) });
  }

  getAllCouponsByPrice(maxPrice: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/company/getCompanyCouponsByPrice", { params: new HttpParams().set('maxPrice', maxPrice.toString()) });
  }

  getCompanyDetails(): Observable<Company> {
    return this.httpClient.get<Coupon>("http://localhost:8080/company/getCompanyDetails");
  }
}
