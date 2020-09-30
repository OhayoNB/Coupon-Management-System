import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-get-company-coupons-by-category',
  templateUrl: './get-company-coupons-by-category.component.html',
  styleUrls: ['./get-company-coupons-by-category.component.css']
})
export class GetCompanyCouponsByCategoryComponent implements OnInit {

  coupons: Coupon[] = [];
  categorySelect = Object.values(Category).slice(0, Object.values(Category).length / 2);

  category: string;
  err: string;

  constructor(private companyService: CompanyService) {

  }

  ngOnInit(): void {

  }

  getCouponByCategory() {
    this.coupons = [];
    this.companyService.getAllCouponsByCategory(this.category).subscribe(val => {
      this.coupons = val;
      this.err = '';
    }, (err => {
      this.err = err.error.message;
    }));
  }
}