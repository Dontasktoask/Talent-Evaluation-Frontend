import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { AdminHome } from '../model/adminhome';

@Injectable({
  providedIn: 'root'
})
export class AdminhomeService {
  
  // private baseUrl='https://api-assets.sandbox.quickstart.cognizantproducts.com/talevalc11160';
  private baseUrl='http://localhost:8080';
  constructor(private http:HttpClient) { }

  // Make call-back
  getEvaluationData(){
    return this.http.get(this.baseUrl + '/assignEvaluation/getEvaluationsDetailsForAdmin')
  }

  // getEvaluationData():Observable<[]>{
  //   return this.http.get<[]>(this.baseUrl)
  //  }
  getCompletedData(){
    return this.http.get(this.baseUrl + '/assignEvaluation/getEvaluationsDetailsForAdmin')
  }
  getPendingData(){
    return this.http.get(this.baseUrl + '/assignEvaluation/getEvaluationsDetailsForAdmin')
  }
}
