import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });

  //Show error message coming from the server
  err: string;
  success: string;
  customer: Customer = {};
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  addCustomer = () => {

    this.customer.firstName = this.formGroup.get('firstName').value;
    this.customer.lastName = this.formGroup.get('lastName').value;
    this.customer.email = this.formGroup.get('email').value;
    this.customer.password = this.formGroup.get('password').value;
    this.adminService.addCustomer(this.customer).subscribe(val => {
      this.success = "The customer has been added successfully";
      this.err = "";
    }, err => {
      this.err = err.error.message;
      this.success = "";
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
}