import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  // baseUrl='https://api-assets.sandbox.quickstart.cognizantproducts.com/talevalc11160';
  private baseUrl='http://localhost:8080';
  constructor(private http:HttpClient) { }

  logoutUser(data:any)
  {
    return this.http.post(this.baseUrl+'/user/logout',data);
  }

}