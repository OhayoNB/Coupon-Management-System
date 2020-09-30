import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-get-one-customer',
  templateUrl: './get-one-customer.component.html',
  styleUrls: ['./get-one-customer.component.css']
})
export class GetOneCustomerComponent implements OnInit {

  customers: Customer[];
  customer: Customer;
  email: string;
  id: number;
  err: string;
  success: string;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllCustomers().subscribe(val => {
      if (val) {
        this.customers = val;
        this.err = "";
      }
    }, err => {
      this.err = err.error.message;
      this.success = "";
    });
  }



  getCustomerByEmail() {
    this.err = "";
    this.success = "";
    this.customers.forEach(customer => {
      if (customer.email === this.email)
        this.customer = customer;
    });
  }
}