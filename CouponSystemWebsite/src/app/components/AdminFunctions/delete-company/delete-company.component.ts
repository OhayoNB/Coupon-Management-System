import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/company.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {

  companies: Company[];
  company: Company;
  email: string;
  id: number;
  err: string;
  success: string;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllCompanies().subscribe(val => {
      if (val) {
        this.companies = val;
        this.err = "";
      }
    }, err => {
      this.err = err.error.message;
      this.success = "";
    });
  }

  deleteCompany = () => {
    this.companies.forEach(val => {
      if (val.email === this.email) {
        this.id = val.id;
      }
    });
    this.adminService.deleteCompany(this.id).subscribe(val => {
      this.err = "";
      this.success = "The company has been deleted successfully";
      this.ngOnInit();
    }, err => {
      this.success = "";
      this.err = err.error.massage;
    });
  }

  getCompanyByEmail() {
    this.err = "";
    this.success = "";
    this.companies.forEach(company => {
      if (company.email === this.email)
        this.company = company;
    });
  }

}