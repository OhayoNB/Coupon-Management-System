import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private err: string;

  getErr(): string {
    return this.err;
  }

  setErr(err: string) {
    this.err = err;
  }
  constructor() { }
}
