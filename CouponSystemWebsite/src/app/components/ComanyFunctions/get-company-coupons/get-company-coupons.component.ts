import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-get-company-coupons',
  templateUrl: './get-company-coupons.component.html',
  styleUrls: ['./get-company-coupons.component.css']
})
export class GetCompanyCouponsComponent implements OnInit {

  coupons: Coupon[] = [];
  err: string;

  constructor(private companyService: CompanyService) {

  }

  ngOnInit(): void {
    this.coupons = [];
    this.companyService.getAllCoupons().subscribe(val => {
      this.coupons = val;
    }, err => {
      this.err = err.error.message;
    });
  }

}