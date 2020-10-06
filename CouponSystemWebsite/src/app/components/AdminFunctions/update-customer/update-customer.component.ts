import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });

  customers: Customer[];
  customer: Customer = {};
  email: string;
  err: string;
  success: string;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllCustomers().subscribe(val => {
      if (val) {
        this.customers = val;
        this.err = "";
        this.disableField();
      }
    }, err => {
      this.err = err.error.message;
      this.success = "";
    });
  }

  updateCustomer = () => {

    this.customer.firstName = this.formGroup.get('firstName').value;
    this.customer.lastName = this.formGroup.get('lastName').value;
    this.customer.email = this.formGroup.get('email').value;
    this.customer.password = this.formGroup.get('password').value;
    this.adminService.updateCustomer(this.customer).subscribe(val => {
      this.err = "";
      this.success = "The customer has been updated successfully";
      this.ngOnInit();
      this.formGroup.setValue({ firstName: '', lastName: '', email: '', password: '' });
      this.formGroup.markAsPristine();
      this.formGroup.markAsUntouched();
    }, err => {
      this.success = "";
      this.err = err.error.message;
    });
  }

  getCustomerByEmail() {
    this.enableField();
    this.err = "";
    this.success = "";
    this.customers.forEach(val => {
      if (val.email === this.email) {
        //Initialize input on template
        this.customer.id = val.id;
        //Initialize input on template
        this.formGroup.get("email").setValue(val.email);
        this.formGroup.get("password").setValue(val.password);
        this.formGroup.get("firstName").setValue(val.firstName);
        this.formGroup.get("lastName").setValue(val.lastName);
      }
    });
  }

  clearInputsMethod() {
    this.formGroup.setValue({ firstName: '', lastName: '', email: '', password: '' });
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
    this.formGroup.controls['firstName'].disable();
    this.formGroup.controls['lastName'].disable();
    this.formGroup.controls['email'].disable();
    this.formGroup.controls['password'].disable();
  }
  enableField() {
    this.formGroup.controls['firstName'].enable();
    this.formGroup.controls['lastName'].enable();
    this.formGroup.controls['email'].enable();
    this.formGroup.controls['password'].enable();
  }

}