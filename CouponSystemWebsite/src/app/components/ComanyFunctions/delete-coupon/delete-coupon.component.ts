import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Coupon } from 'src/app/models/coupon.model';

@Component({
  selector: 'app-delete-coupon',
  templateUrl: './delete-coupon.component.html',
  styleUrls: ['./delete-coupon.component.css']
})
export class DeleteCouponComponent implements OnInit {

  coupons: Coupon[];
  coupon: Coupon = {};
  title: string;
  id: number;
  err: string;
  success: string;


  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.companyService.getAllCoupons().subscribe(val => {
      if (val) {
        this.coupons = val;
        this.err = "";
      }
    }, err => {
      this.err = err.error.message;
      this.success = "";
    });
  }

  getCoupon() {
    this.err = "";
    this.success = "";
    this.coupons.forEach(coupon => {
      if (coupon.title === this.title)
        this.coupon = coupon;
    });
  }

  deleteCoupon() {
    this.coupons.forEach(val => {
      if (val.title === this.title) {
        this.id = val.id;
      }
    });
    this.companyService.deleteCoupon(this.coupon.id).subscribe(val => {
      this.err = "";
      this.success = "The coupon has been deleted successfully";
      this.ngOnInit();
    }, err => {
      this.success = "";
      this.err = err.error.massage;
    });
  }

}
