import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserhomeService {
  // private baseUrl = 'https://api-assets.sandbox.quickstart.cognizantproducts.com/talevalc11160';
  private baseUrl='http://localhost:8080';
  constructor(private http: HttpClient) {}

  // To get daya by Evaluator Id
  getEvaluationData(evaluatorId:any){
    return this.http.get(this.baseUrl+ '/assignEvaluation/getEvaluationsDetailsForEvaluator/'+evaluatorId);
  }

  // getCurrentUserDetails(evaluatorId:any){
  //   return this.http.get<any>(this.baseUrl+'/assignEvaluation/getEvaluationsDetailsForEvaluator/'+evaluatorId);
  // }

}
