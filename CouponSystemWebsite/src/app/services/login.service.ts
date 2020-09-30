import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  loginAdmin(user: User): Observable<{ "token": string }> {
    return this.httpClient.post<{ "token": string }>("http://localhost:8080/admin/login", user);
  }

  loginCompany(user: User): Observable<{ "token": string }> {
    return this.httpClient.post<{ "token": string }>("http://localhost:8080/company/login", user);
  }

  loginCustomer(user: User): Observable<{ "token": string }> {
    return this.httpClient.post<{ "token": string }>("http://localhost:8080/customer/login", user);
  }
}
