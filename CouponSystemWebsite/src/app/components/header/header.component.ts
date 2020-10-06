import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyAuthGuardService } from 'src/app/services/company-auth-guard.service';
import { CustomerAuthGuardService } from 'src/app/services/customer-auth-guard.service';
import { AdminAuthGuardService } from 'src/app/services/admin-auth-guard.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {

  }

  isLoggedInAdmin() {
    let authAdmin: AdminAuthGuardService = new AdminAuthGuardService();

    if (authAdmin.isLoggedIn())
      return true;
    return false;
  }

  isLoggedInCustomer() {
    let authCustomer: CustomerAuthGuardService = new CustomerAuthGuardService();
    if (authCustomer.isLoggedIn())
      return true;
    return false;
  }

  isLoggedInCompany() {
    let authCompany: CompanyAuthGuardService = new CompanyAuthGuardService();

    if (authCompany.isLoggedIn())
      return true;
    return false;
  }

  logOut() {
    //Remove the token and navigate to the login page
    sessionStorage.removeItem("Authorization");
    this.dataService.setErr('');
    this.router.navigateByUrl('/login');
  }
}