import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  userInfo = undefined;
  apiURL = " https://626bb1356a86cd64adc037fc.mockapi.io/";

  constructor(private http: HttpClient, private router: Router) { }

  public login(credentials: any) {
    return this.http.post<any>(this.apiURL+"login", credentials);
  }

  public logout() {
    this.userInfo = undefined;
    this.router.navigate(["/login"]);
  }

  public register(credentials: any) {
    return this.http.post<any>(this.apiURL+"user", credentials);
  }
}

