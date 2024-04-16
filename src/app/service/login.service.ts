import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface LoginDetails{
  userName:string;
  userId:number;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // baseUrl='https://api-assets.sandbox.quickstart.cognizantproducts.com/talevalc11160';
  baseUrl='http://localhost:8080';
  private loginDetails = new BehaviorSubject<LoginDetails>({
    userName: '',
    userId: 0
  });
  constructor(private http:HttpClient) { }
  private loginDetails$=this.loginDetails.asObservable();

  getLoginDetail():Observable<LoginDetails>{
    return this.loginDetails
  }
  setLoginDetails(latestValue:LoginDetails){
    return this.loginDetails.next(latestValue);
  }

  loginUser(data:any)
  {
    return this.http.post(this.baseUrl+'/user/login',data)
  }

}