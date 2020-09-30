import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ClientType } from 'src/app/models/clientType.model';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  clientType: string;
  clientSelect = Object.values(ClientType).slice(0, Object.values(ClientType).length / 2);
  err: string;

  constructor(private router: Router, private loginService: LoginService, private dataService: DataService) { }

  ngOnInit(): void {
    if (this.dataService.getErr()) {
      this.err = this.dataService.getErr();
    }
  }

  login() {
    switch (this.clientType) {

      case "Administrator": {
        let obsJwt: Observable<{ "token": string }> = this.loginService.loginAdmin(new User(this.email, this.password));
        obsJwt.subscribe(token => {
          let myToken: string = token.token;
          console.log(myToken);
          localStorage.setItem("Authorization", "Bearer " + myToken);
          this.router.navigateByUrl('/admin');
        }, (err => {
          if (err.status === 0)
            this.err = "Server Is Down";
          if (err.status === 500)
            this.err = "Invalid email or password";
        }));
        break;
      }

      case "Company": {
        let obsJwt: Observable<{ "token": string }> = this.loginService.loginCompany(new User(this.email, this.password));
        obsJwt.subscribe(token => {
          let myToken: string = token.token;
          console.log(myToken);
          localStorage.setItem("Authorization", "Bearer " + myToken);
          this.router.navigateByUrl('/company');
        }, (err => {
          if (err.status === 0)
          this.err = "Server Is Down";
          if (err.status === 500)
            this.err = "Invalid email or password";
        }));
        break;
      }

      case "Customer": {
        let obsJwt: Observable<{ "token": string }> = this.loginService.loginCustomer(new User(this.email, this.password));
        obsJwt.subscribe(token => {
          let myToken: string = token.token;
          console.log(myToken);
          localStorage.setItem("Authorization", "Bearer " + myToken);
          this.router.navigateByUrl('/customer');
        }, (err => {
          if (err.status === 0)
          this.err = "Server Is Down";
          if (err.status === 500)
            this.err = "Invalid email or password";
        }));
        break;
      }
      default: {
        break;
      }
    }
  }
}
