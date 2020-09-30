import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  coupons: Coupon[] = null;
  couponsByCategory: Coupon[];
  err: string;
  success: string;
  categorySelected: string;
  categorySelect = Object.values(Category).slice(0, Object.values(Category).length / 2);
  select: FormControl = new FormControl();
  defaultState = this.select.value;

  //Interval
  coupon: Coupon;
  private pointer: number = 0;
  private interval;

  constructor(private customerService: CustomerService) {
    this.categorySelect.splice(0, 0, "All Coupons");
  }

  ngOnInit(): void {
    this.customerService.getAllCoupons().subscribe(val => {
      this.coupons = val;
      this.err = "";
    }, err => {
      this.err = err.error.message;
    });
    if (!this.coupons) {
      this.interval = setInterval(() => {
        this.coupon = this.coupons[this.pointer];
        this.pointer++;
        if (this.pointer === this.coupons.length) { this.pointer = 0 };
      }, 3000)
    }
  }

  x() {
    this.coupon = this.coupons[this.pointer];
    this.pointer++;
  }

  displayByCategory() {
    this.err = "";
    this.success = "";
    this.couponsByCategory = [];
    if (this.categorySelected === "All Coupons") {
      this.couponsByCategory = this.coupons;
    }
    else {
      this.coupons.forEach(val => {
        if (val.category.toString() === this.categorySelected) {
          this.couponsByCategory.push(val);
        }
      });
    }
    if (this.couponsByCategory.length === 0) {
      this.err = "No coupons found with selected category";
    }
  }

  purchaseCoupon(coupon) {
    this.err = "";
    this.success = "";
    this.coupons = null;
    this.couponsByCategory = null;
    this.customerService.purchaseCoupon(coupon).subscribe(val => {
      this.success = "The purchase has been completed successfully"
      this.ngOnInit();
      this.err = "";
    }, err => {
      this.success = "";
      this.err = err.error.message;
    });
  }

  clickMe(coupon: Coupon) {
    this.couponsByCategory = [];
    this.couponsByCategory.push(coupon);
    this.select.setValue(coupon.category)
  }
}