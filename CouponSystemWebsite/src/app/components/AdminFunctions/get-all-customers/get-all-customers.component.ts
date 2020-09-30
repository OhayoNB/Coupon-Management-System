import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  customers: Customer[] = [];
  err: string;
  search: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllCustomers().subscribe(val => {
      this.customers = val;
    }, err => {
      this.err = err.error.message;
    });
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
