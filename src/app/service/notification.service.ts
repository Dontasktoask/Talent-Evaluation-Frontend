import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  hi:any

  // public notificationSubject = new Subject<string>();
  public notificationSubject = new BehaviorSubject<string>('');
  constructor() { }

  sendNotification(data:any){
    this.notificationSubject.next(data);
  }

}
