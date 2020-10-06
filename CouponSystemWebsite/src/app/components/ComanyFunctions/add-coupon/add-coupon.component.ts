import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  coupon: Coupon = {};
  categorySelect = Object.values(Category).slice(0, Object.values(Category).length / 2);
  localUrl: any[];
  currentDateS = new Date();
  currentDateE = new Date();

  reg = "https?:/(?:/[^/]+)+\\.(?:jpg|gif|png|jpeg)";

  formGroup: FormGroup = new FormGroup({
    category: new FormControl(),
    title: new FormControl(),
    description: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    amount: new FormControl(),
    price: new FormControl(),
    image: new FormControl('', [Validators.pattern(this.reg)])
  }
  );

  //Show the error message coming from the server
  err: string;
  success: string;

  constructor(private companyService: CompanyService) {

  }

  ngOnInit(): void {
    this.currentDateE.setDate(this.currentDateE.getDate() + 1);
  }

  //The method that goes to the server
  addCoupon(): void {
    this.coupon.category = this.categorySelect.indexOf(this.formGroup.get('category').value);
    this.coupon.title = this.formGroup.get('title').value;
    this.coupon.description = this.formGroup.get('description').value;
    this.coupon.startDate = this.formGroup.get('startDate').value;
    this.coupon.endDate = this.formGroup.get('endDate').value;
    this.coupon.amount = this.formGroup.get('amount').value;
    this.coupon.price = this.formGroup.get('price').value;
    this.coupon.image = this.formGroup.get('image').value;

    //Handling request & response
    if (this.formGroup.get('startDate').value < this.formGroup.get('endDate').value) {
      this.companyService.addCoupon(this.coupon).subscribe(value => {
        this.success = "The coupon has been added successfully";
        this.err = "";
      }, err => {
        this.err = err.error.message;
        this.success = "";
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

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
