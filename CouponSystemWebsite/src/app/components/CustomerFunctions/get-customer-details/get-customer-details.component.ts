import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-get-customer-details',
  templateUrl: './get-customer-details.component.html',
  styleUrls: ['./get-customer-details.component.css']
})
export class GetCustomerDetailsComponent implements OnInit {

  customer: Customer;
  err: string;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomerDetails().subscribe(
      val => {
        if (val) {
          this.customer = val;
          if (!this.customer.coupons) {
            this.err = "This customer does not have coupons"
          }
          else {
            this.err = "";
          }
        }
      }, (err => {
        this.err = err.error.message;
      }));
  }
}