import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-get-one-company',
  templateUrl: './get-one-company.component.html',
  styleUrls: ['./get-one-company.component.css']
})
export class GetOneCompanyComponent implements OnInit {

  companies: Company[];
  company: Company;
  email: string;
  id: number;
  err: string;
  success: string

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
    }
    );
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