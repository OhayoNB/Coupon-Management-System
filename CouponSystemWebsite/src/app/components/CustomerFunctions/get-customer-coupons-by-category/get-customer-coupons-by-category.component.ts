import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { Category } from 'src/app/models/category.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-get-customer-coupons-by-category',
  templateUrl: './get-customer-coupons-by-category.component.html',
  styleUrls: ['./get-customer-coupons-by-category.component.css']
})
export class GetCustomerCouponsByCategoryComponent implements OnInit {

  coupons: Coupon[];
  categorySelect = Object.values(Category).slice(0, Object.values(Category).length / 2);
  category: string;
  err: string;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  getCouponByCategory() {
    this.coupons = [];
    this.customerService.getCustomerCouponsByCategory(this.category).subscribe(
      val => {
        this.coupons = val;
        this.err = "";
      }, (err => {
        this.err = err.error.message;
      }));
  }
}