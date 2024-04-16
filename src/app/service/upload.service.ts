import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  baseurl= 'https://api-assets.sandbox.quickstart.cognizantproducts.com/talevalc11160';
  constructor(private http:HttpClient) { }

  uploadFile(data:any){
    return this.http.post(this.baseurl+'/user/update',data);
  }
}
