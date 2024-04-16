import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UsermanagmentService {

  // baseurl= 'https://api-assets.sandbox.quickstart.cognizantproducts.com/talevalc11160';
  baseurl='http://localhost:8080';
  // updateUrl='http://localhost:8080/user/update';
  id= Users;
  constructor(private http: HttpClient) { }

  getallUsers():Observable<any>{
    return this.http.get<any>(this.baseurl+'/user/getAllUsers');
  }

  getCurrentUser(associateId:any){
    return this.http.get<any>(this.baseurl+'/user/getUserById/'+associateId);
  }

  updateUser(data:any){
    return this.http.put(this.baseurl+'/user/update',data);
  }


}
