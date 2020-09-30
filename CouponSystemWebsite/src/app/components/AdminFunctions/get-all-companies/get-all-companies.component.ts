import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {

  companies: Company[];
  err: string;
  search: any;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllCompanies().subscribe(val => {
      this.companies = val;
    }, err => {
      this.err = err.error.message;
    })

  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}