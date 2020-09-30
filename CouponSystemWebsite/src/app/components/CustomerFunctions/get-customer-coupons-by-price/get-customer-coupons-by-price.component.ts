import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-get-customer-coupons-by-price',
  templateUrl: './get-customer-coupons-by-price.component.html',
  styleUrls: ['./get-customer-coupons-by-price.component.css']
})
export class GetCustomerCouponsByPriceComponent implements OnInit {

  price: FormControl = new FormControl();
  coupons: Coupon[];
  err: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  getCouponsByMaxPrice() {
    this.customerService.getCustomerCouponsByPrice(this.price.value).subscribe(val => {
      this.coupons = val;
      this.err = "";
    }, err => {
      this.err = err.error.message;
    })
  }
}