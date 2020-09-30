import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AddCouponComponent } from './components/ComanyFunctions/add-coupon/add-coupon.component';
import { UpdateCouponComponent } from './components/ComanyFunctions/update-coupon/update-coupon.component';
import { DeleteCouponComponent } from './components/ComanyFunctions/delete-coupon/delete-coupon.component';
import { GetCompanyCouponsComponent } from './components/ComanyFunctions/get-company-coupons/get-company-coupons.component';
import { GetCompanyCouponsByPriceComponent } from './components/ComanyFunctions/get-company-coupons-by-price/get-company-coupons-by-price.component';
import { GetCompanyDetailsComponent } from './components/ComanyFunctions/get-company-details/get-company-details.component';
import { GetCompanyCouponsByCategoryComponent } from './components/ComanyFunctions/get-company-coupons-by-category/get-company-coupons-by-category.component';
import { AddCompanyComponent } from './components/AdminFunctions/add-company/add-company.component';
import { UpdateCompanyComponent } from './components/AdminFunctions/update-company/update-company.component';
import { DeleteCompanyComponent } from './components/AdminFunctions/delete-company/delete-company.component';
import { GetAllCompaniesComponent } from './components/AdminFunctions/get-all-companies/get-all-companies.component';
import { GetOneCompanyComponent } from './components/AdminFunctions/get-one-company/get-one-company.component';
import { AddCustomerComponent } from './components/AdminFunctions/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/AdminFunctions/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/AdminFunctions/delete-customer/delete-customer.component';
import { GetAllCustomersComponent } from './components/AdminFunctions/get-all-customers/get-all-customers.component';
import { GetOneCustomerComponent } from './components/AdminFunctions/get-one-customer/get-one-customer.component';
import { PurchaseCouponComponent } from './components/CustomerFunctions/purchase-coupon/purchase-coupon.component';
import { GetCustomerCouponsComponent } from './components/CustomerFunctions/get-customer-coupons/get-customer-coupons.component';
import { GetCustomerCouponsByCategoryComponent } from './components/CustomerFunctions/get-customer-coupons-by-category/get-customer-coupons-by-category.component';
import { GetCustomerCouponsByPriceComponent } from './components/CustomerFunctions/get-customer-coupons-by-price/get-customer-coupons-by-price.component';
import { GetCustomerDetailsComponent } from './components/CustomerFunctions/get-customer-details/get-customer-details.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { CompanyAreaComponent } from './components/company-area/company-area.component';
import { AdminAreaComponent } from './components/admin-area/admin-area.component';
import { CustomerAreaComponent } from './components/customer-area/customer-area.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorService } from './services/http-interceptor.service';
import { ListFilterCompanyPipe } from './pipes/list-filter-company.pipe';
import { ListFilterCustomerPipe } from './pipes/list-filter-customer.pipe';

@NgModule({
  declarations: [
    AddCouponComponent,
    UpdateCouponComponent,
    DeleteCouponComponent,
    GetCompanyCouponsComponent,
    GetCompanyCouponsByPriceComponent,
    GetCompanyDetailsComponent,
    GetCompanyCouponsByCategoryComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    DeleteCompanyComponent,
    GetAllCompaniesComponent,
    GetOneCompanyComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    GetAllCustomersComponent,
    GetOneCustomerComponent,
    PurchaseCouponComponent,
    GetCustomerCouponsComponent,
    GetCustomerCouponsByCategoryComponent,
    GetCustomerCouponsByPriceComponent,
    GetCustomerDetailsComponent,
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    CompanyAreaComponent,
    AdminAreaComponent,
    CustomerAreaComponent,
    PageNotFoundComponent,
    ListFilterCompanyPipe,
    ListFilterCustomerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    ListFilterCompanyPipe,
    ListFilterCustomerPipe],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
