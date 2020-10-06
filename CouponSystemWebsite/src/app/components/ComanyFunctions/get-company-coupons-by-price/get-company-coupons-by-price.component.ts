import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Coupon } from 'src/app/models/coupon.model';
import { FormControl } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-get-company-coupons-by-price',
  templateUrl: './get-company-coupons-by-price.component.html',
  styleUrls: ['./get-company-coupons-by-price.component.css']
})
export class GetCompanyCouponsByPriceComponent implements OnInit {

  price: FormControl = new FormControl();
  coupons: Coupon[];
  err: string;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
  }

  getCouponsByMaxPrice() {
    this.coupons = [];
    this.err = "";
    this.companyService.getAllCouponsByPrice(this.price.value).subscribe(val => {
      this.coupons = val;
    }, err => {
      this.err = err.error.message;
    })
  }
  
}
