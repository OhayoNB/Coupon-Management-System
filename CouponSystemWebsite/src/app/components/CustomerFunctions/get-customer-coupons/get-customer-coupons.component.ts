import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-get-customer-coupons',
  templateUrl: './get-customer-coupons.component.html',
  styleUrls: ['./get-customer-coupons.component.css']
})
export class GetCustomerCouponsComponent implements OnInit {

  coupons: Coupon[];
  err: string;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomerCoupons().subscribe(
      val => {
        this.coupons = val;
        this.err = "";
      }, (err => {
        this.err = err.error.message;
      })
    );
  }
}