import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../models/company.model';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  addCompany(company: Company): Observable<any> {
    return this.httpClient.post("http://localhost:8080/admin/addCompany", company);
  }

  updateCompany(company: Company): Observable<any> {
    return this.httpClient.put("http://localhost:8080/admin/updateCompany", company);
  }

  deleteCompany(id: number) {
    return this.httpClient.delete("http://localhost:8080/admin/deleteCompany/" + id);
  }

  getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>("http://localhost:8080/admin/getAllCompanies");
  }

  getOneCompany(id: number): Observable<Company> {
    return this.httpClient.get("http://localhost:8080/admin/getOneCompany/" + id);
  }

  addCustomer(customer: Customer): Observable<any> {
    return this.httpClient.post("http://localhost:8080/admin/addCustomer", customer);
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.httpClient.put("http://localhost:8080/admin/updateCustomer", customer);
  }

  deleteCustomer(id: number) {
    return this.httpClient.delete("http://localhost:8080/admin/deleteCustomer/" + id);
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:8080/admin/getAllCustomers");
  }

  getOneCustomer(id: number): Observable<Customer> {
    return this.httpClient.get("http://localhost:8080/admin/getOneCustomer/" + id);
  }

}
