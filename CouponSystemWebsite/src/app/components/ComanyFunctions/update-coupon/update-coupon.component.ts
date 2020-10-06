import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { Category } from 'src/app/models/category.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  reg = "https?:/(?:/[^/]+)+\\.(?:jpg|gif|png)";

  formGroup: FormGroup = new FormGroup({
    category: new FormControl(),
    title: new FormControl(),
    description: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    amount: new FormControl(),
    price: new FormControl(),
    image: new FormControl('', Validators.pattern(this.reg)),
  });

  title: string;
  coupons: Coupon[];
  coupon: Coupon = {};
  localUrl: any;
  categorySelect = Object.values(Category).slice(0, Object.values(Category).length / 2);
  img_path: string;

  currentDateS = new Date();
  currentDateE = new Date();

  err: string;
  success: string;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getAllCoupons().subscribe(val => {
      if (val) {
        this.coupons = val;
        this.currentDateE.setDate(this.currentDateE.getDate() + 1);
        this.err = "";
        this.disableField();
      }
    }, err => {
      this.err = err.error.message;
      this.success = "";
    });
  }


  getCouponByTitle() {
    this.enableField();
    this.err = "";
    this.success = "";
    this.coupons.forEach(val => {
      if (val.title === this.title) {
        this.coupon.id = val.id;
        this.coupon.companyID = val.companyID;
        this.formGroup.get('category').setValue(val.category);
        this.formGroup.get('title').setValue(val.title);
        this.formGroup.get('description').setValue(val.description);
        this.formGroup.get('startDate').setValue(val.startDate);
        this.formGroup.get('endDate').setValue(val.endDate);
        this.formGroup.get('amount').setValue(val.amount);
        this.formGroup.get('price').setValue(val.price);
        this.formGroup.get('image').setValue(val.image);
      }
    });
  }

  updateCoupon(): void {
    this.coupon.category = this.categorySelect.indexOf(this.formGroup.get('category').value);
    this.coupon.title = this.formGroup.get('title').value;
    this.coupon.description = this.formGroup.get('description').value;
    this.coupon.startDate = this.formGroup.get('startDate').value;
    this.coupon.endDate = this.formGroup.get('endDate').value;
    this.coupon.amount = this.formGroup.get('amount').value;
    this.coupon.price = this.formGroup.get('price').value;
    this.coupon.image = this.formGroup.get('image').value;

    if (this.formGroup.get('startDate').value < this.formGroup.get('endDate').value) {
      this.companyService.updateCoupon(this.coupon).subscribe(val => {
        this.err = "";
        this.success = "The coupon has been updated successfully";
        this.ngOnInit();
        this.formGroup.setValue({ category: '', title: '', description: '', startDate: '', endDate: '', amount: '', price: '', image: '' });
        this.formGroup.markAsPristine();
        this.formGroup.markAsUntouched();
      }, err => {
        this.success = "";
        this.err = err.error.message;
      });
    } else {
      this.success = "";
      this.err = "Cannot add coupon with invalid end date";
    }
  }

  clearInputsMethod() {
    this.formGroup.setValue({ category: '', title: '', description: '', startDate: '', endDate: '', amount: '', price: '', image: '' });
    this.err = "";
    this.success = "";
    this.formGroup.markAsPristine();
    this.formGroup.markAsUntouched();
  }

  ifValidName(str: string) {
    if (this.formGroup.controls[str].errors === null && this.formGroup.get(str).touched || this.formGroup.controls[str].errors === null && this.formGroup.get(str).dirty)
      return true;
  }

  ifNotValidName(str: string) {
    if (this.formGroup.controls[str].errors !== null && this.formGroup.get(str).touched || this.formGroup.controls[str].errors !== null && this.formGroup.get(str).dirty)
      return true;
  }

  disableField() {
    this.formGroup.controls['category'].disable();
    this.formGroup.controls['title'].disable();
    this.formGroup.controls['description'].disable();
    this.formGroup.controls['startDate'].disable();
    this.formGroup.controls['endDate'].disable();
    this.formGroup.controls['amount'].disable();
    this.formGroup.controls['price'].disable();
    this.formGroup.controls['image'].disable();
  }

  enableField() {
    this.formGroup.controls['category'].enable();
    this.formGroup.controls['title'].enable();
    this.formGroup.controls['description'].enable();
    this.formGroup.controls['startDate'].enable();
    this.formGroup.controls['endDate'].enable();
    this.formGroup.controls['amount'].enable();
    this.formGroup.controls['price'].enable();
    this.formGroup.controls['image'].enable();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}