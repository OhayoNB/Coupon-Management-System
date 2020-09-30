import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  
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

  deleteCustomer = () => {
    this.customers.forEach(val => {
      if (val.email === this.email) {
        this.id = val.id;
      }
    });
    this.adminService.deleteCustomer(this.id).subscribe(val => {
      this.err = "";
      this.success = "The customer has been deleted successfully";
      this.ngOnInit();
    }, err => {
      this.err = err.error.massage;
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