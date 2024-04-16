import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AssignEval {
  // baseUrl='https://api-assets.sandbox.quickstart.cognizantproducts.com/talevalc11160';
  baseUrl='http://localhost:8080';
  constructor(private http:HttpClient) { }

  // Evaluation data for admin
  getAdminEvalData(data:any)
  {
    return this.http.get(this.baseUrl+'/assignEvaluation/getEvaluationsDetailsForAdmin',data)
  }

  // To submit Evaluation
  assignEvlauation(data:any)
  {
    return this.http.post(this.baseUrl+'/assignEvaluation/submitEvaluation',data)
  }

  // Evalution data for evaluator *** use this in user home
  getEvaluationData(userId:any)
  {
    return this.http.get<any>(this.baseUrl+'/assignEvaluation/getEvaluationsDetailsForEvaluator/'+userId)
  }

  //To Evaluate Candidate ** user-evaluatate-candidate page
  evaluateCandidate(data:any)
  {
    return this.http.post(this.baseUrl+'/assignEvaluation/submitFeedback',data)
  }



}
