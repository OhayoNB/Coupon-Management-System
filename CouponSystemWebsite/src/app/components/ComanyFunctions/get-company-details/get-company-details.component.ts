import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-get-company-details',
  templateUrl: './get-company-details.component.html',
  styleUrls: ['./get-company-details.component.css']
})
export class GetCompanyDetailsComponent implements OnInit {

  company: Company;
  err: string;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanyDetails().subscribe(
      val => {
        if (val) {
          this.company = val;
          if (!this.company.coupons) {
            this.err = "This company does not have coupons"
          }
        }
      }, (err => {
        this.err = err.error.message;
      }));
  }
}
