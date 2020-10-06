import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  err: string;

  constructor(private router: Router, private dataService: DataService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('Authorization')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('Authorization')
        }
      })
    }
    return next.handle(req).pipe (
      //Update sessionStorage to a new token
      tap(res => {
        if (res instanceof HttpResponse) {
          sessionStorage.setItem("Authorization", "Bearer " + res.headers.get('Authorization'));
        }
      }),
      catchError(err => {
        console.log(err);

        if (err && err.status === 0) {
          this.err = "Server is down"; //There is an issue with the server, please try to login again
          sessionStorage.removeItem('Authorization');
          //Output using the data sevice to login component
          this.dataService.setErr(this.err);
          this.router.navigateByUrl('login');
        }

        if (err && err.status === 401) {
          this.err = "Your user details are unauthorized, please try to login again";
          sessionStorage.removeItem('Authorization');
          //Output using the data sevice to login component
          this.dataService.setErr(this.err);
          this.router.navigateByUrl('login');
        }

        if (err instanceof HttpErrorResponse)
          if (err && err.error.message === "No message available" && err.status === 500) {
            this.err = "There was a problem with the server, please login again";
            sessionStorage.removeItem('Authorization');
            //Output using the data sevice to login component
            this.dataService.setErr(this.err);
            this.router.navigateByUrl('login');
          }

        return throwError(err);
      }))
  }
}
