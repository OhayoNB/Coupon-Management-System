import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/company.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  //Get values from the user and validate them
  formGroup: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  //Show the error message coming from the server
  err: string;
  success: string;

  //Generate a json format of company and send it to the server
  company: Company = {};

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  //The method that goes to the server
  addCompany(): void {
    this.company.name = this.formGroup.get('name').value;
    this.company.email = this.formGroup.get('email').value;
    this.company.password = this.formGroup.get('password').value;

    //Handling request & response
    this.adminService.addCompany(this.company).subscribe(value => {
      this.success = "The company has been added successfully";
      this.err = "";
    }, err => {
      this.err = err.error.message;
      this.success = "";
    })
  }

  clearInputsMethod() {
    this.formGroup.setValue({ name: '', email: '', password: '' });
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