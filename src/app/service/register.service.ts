import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  // baseUrl='https://api-assets.sandbox.quickstart.cognizantproducts.com/talevalc11160';
  private baseUrl='http://localhost:8080';
  constructor(private http:HttpClient) { }

  registerUser(data:any)
  {
    return this.http.post(this.baseUrl+'/user/create',data)
  }

}
