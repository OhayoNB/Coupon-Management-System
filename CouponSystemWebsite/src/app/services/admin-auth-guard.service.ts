import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private router?: Router) { }

  canActivate() {
    if (this.isLoggedIn())
      return true;
    this.router.navigateByUrl('/login');
    return false;
  }

  //Check if the right clientType is loggin in to display a button in the header
  isLoggedIn() {
    let clientType = this.getClientType();
    if (clientType && clientType.iss === 'Administrator')
      return true;

    return false;
  }

  //Get the client type from the token
  getClientType() {
    let token = localStorage.getItem('Authorization');
    if (token && !token.startsWith("Bearer null")) {
      let decode: { iss: any } = jwt_decode(token);
      return decode;
    }
  }
}
