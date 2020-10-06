import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  companies: Company[];
  company: Company = {};
  email: string;
  err: string;
  success: string;


  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllCompanies().subscribe(val => {
      if (val) {
        this.companies = val;
        this.err = "";
        this.disableField();
      }
    }, err => {
      this.err = err.error.message;
      this.success = "";
    });
  }

  updateCompany(): void {
    this.company.email = this.formGroup.get('email').value;
    this.company.password = this.formGroup.get('password').value;
    this.adminService.updateCompany(this.company).subscribe(
      val => {
        this.err = "";
        this.success = "The company has been updated successfully";
        this.ngOnInit();
        this.formGroup.setValue({ email: '', password: '' });
        this.formGroup.markAsPristine();
        this.formGroup.markAsUntouched();
      }, err => {
        this.success = "";
        this.err = err.error.message;
      });
  }

  getCompanyByEmail() {
    this.enableField();
    this.err = "";
    this.success = "";
    this.companies.forEach(val => {
      if (val.email === this.email) {
        //Initialize input on template
        this.formGroup.get("email").setValue(val.email);
        this.formGroup.get("password").setValue(val.password);

        //Initialize reference to update
        this.company.id = val.id;
        this.company.name = val.name;
      }
    });
  }


  clearInputsMethod() {
    this.formGroup.setValue({ email: '', password: '' });
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
    this.formGroup.controls['email'].disable();
    this.formGroup.controls['password'].disable();
  }
  enableField() {
    this.formGroup.controls['email'].enable();
    this.formGroup.controls['password'].enable();
  }

}