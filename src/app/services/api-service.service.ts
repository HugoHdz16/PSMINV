import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private URL = 'http://localhost:3100/api/';

  constructor(private http: HttpClient) { }

  SignIn(user: any) {
    return this.http.post<any>(this.URL + 'SignIn', user);
  }

  SignUp(user: any) {
    return this.http.post<any>(this.URL + 'SignUp', user);
  }
}
