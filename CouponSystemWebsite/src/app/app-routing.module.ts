import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CompanyAreaComponent } from './components/company-area/company-area.component';
import { GetCompanyCouponsComponent } from './components/ComanyFunctions/get-company-coupons/get-company-coupons.component';
import { AddCompanyComponent } from './components/AdminFunctions/add-company/add-company.component';
import { DeleteCompanyComponent } from './components/AdminFunctions/delete-company/delete-company.component';
import { GetCompanyCouponsByPriceComponent } from './components/ComanyFunctions/get-company-coupons-by-price/get-company-coupons-by-price.component';
import { GetCompanyCouponsByCategoryComponent } from './components/ComanyFunctions/get-company-coupons-by-category/get-company-coupons-by-category.component';
import { GetCompanyDetailsComponent } from './components/ComanyFunctions/get-company-details/get-company-details.component';
import { CustomerAreaComponent } from './components/customer-area/customer-area.component';
import { GetCustomerCouponsComponent } from './components/CustomerFunctions/get-customer-coupons/get-customer-coupons.component';
import { GetCustomerCouponsByCategoryComponent } from './components/CustomerFunctions/get-customer-coupons-by-category/get-customer-coupons-by-category.component';
import { GetCustomerCouponsByPriceComponent } from './components/CustomerFunctions/get-customer-coupons-by-price/get-customer-coupons-by-price.component';
import { GetCustomerDetailsComponent } from './components/CustomerFunctions/get-customer-details/get-customer-details.component';
import { PurchaseCouponComponent } from './components/CustomerFunctions/purchase-coupon/purchase-coupon.component';
import { AdminAreaComponent } from './components/admin-area/admin-area.component';
import { AddCustomerComponent } from './components/AdminFunctions/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './components/AdminFunctions/delete-customer/delete-customer.component';
import { GetAllCompaniesComponent } from './components/AdminFunctions/get-all-companies/get-all-companies.component';
import { GetAllCustomersComponent } from './components/AdminFunctions/get-all-customers/get-all-customers.component';
import { GetOneCompanyComponent } from './components/AdminFunctions/get-one-company/get-one-company.component';
import { GetOneCustomerComponent } from './components/AdminFunctions/get-one-customer/get-one-customer.component';
import { UpdateCompanyComponent } from './components/AdminFunctions/update-company/update-company.component';
import { UpdateCustomerComponent } from './components/AdminFunctions/update-customer/update-customer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UpdateCouponComponent } from './components/ComanyFunctions/update-coupon/update-coupon.component';
import { DeleteCouponComponent } from './components/ComanyFunctions/delete-coupon/delete-coupon.component';
import { AddCouponComponent } from './components/ComanyFunctions/add-coupon/add-coupon.component';
import { CompanyAuthGuardService } from './services/company-auth-guard.service';
import { CustomerAuthGuardService } from './services/customer-auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },

  {
    path: "company", component: CompanyAreaComponent, canActivate: [CompanyAuthGuardService], children: [
      { path: '', redirectTo: "viewAllCoupons", pathMatch: 'full' },
      { path: "viewAllCoupons", component: GetCompanyCouponsComponent },
      { path: "createCoupon", component: AddCouponComponent },
      { path: "updateCoupon", component: UpdateCouponComponent },
      { path: "deleteCoupon", component: DeleteCouponComponent },
      { path: "viewAllCouponsByCategory", component: GetCompanyCouponsByCategoryComponent },
      { path: "viewAllCouponsByMaxPrice", component: GetCompanyCouponsByPriceComponent },
      { path: "viewDetails", component: GetCompanyDetailsComponent },
      { path: "**", redirectTo: "viewAllCoupons", pathMatch: 'full' }
    ]
  },

  {
    path: "customer", component: CustomerAreaComponent, canActivate: [CustomerAuthGuardService], children: [
      { path: '', redirectTo: "viewCustomerCoupons", pathMatch: 'full' },
      { path: "viewCustomerCoupons", component: GetCustomerCouponsComponent },
      { path: "viewCustomerCouponsByCategory", component: GetCustomerCouponsByCategoryComponent },
      { path: "viewCustomerCouponsByPrice", component: GetCustomerCouponsByPriceComponent },
      { path: "viewCustomerDetails", component: GetCustomerDetailsComponent },
      { path: "purchaseCoupon", component: PurchaseCouponComponent },
      { path: '**', redirectTo: "viewCustomerCoupons", pathMatch: 'full' },
    ]
  },
  {
    path: "admin", component: AdminAreaComponent, canActivate: [AdminAuthGuardService], children: [
      { path: '', redirectTo: "viewAllCompanies", pathMatch: 'full' },
      { path: "createCompany", component: AddCompanyComponent },
      { path: "createCustomer", component: AddCustomerComponent },
      { path: "deleteCompany", component: DeleteCompanyComponent },
      { path: "deleteCustomer", component: DeleteCustomerComponent },
      { path: "viewAllCompanies", component: GetAllCompaniesComponent },
      { path: "viewAllCustomers", component: GetAllCustomersComponent },
      { path: "viewCompany", component: GetOneCompanyComponent },
      { path: "viewCustomer", component: GetOneCustomerComponent },
      { path: "updateCompany", component: UpdateCompanyComponent },
      { path: "updateCustomer", component: UpdateCustomerComponent },
      { path: '**', redirectTo: "viewAllCompanies", pathMatch: 'full' }
    ]
  },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
