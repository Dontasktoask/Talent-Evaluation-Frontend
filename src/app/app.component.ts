import { OnInit } from '@angular/core';
//import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
//import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  // role: any='Admin';
  title = 'quickstart-template-angular-helloworld-client';
  logo: string = 'assets/images/QuickStart_Logo.svg';
  // constructor(private notifierService: ToastService, private _authService: AuthService) {}
  //Sample Usage of Error Toast
  // ngOnInit(): void {

  //   //this.notifierService.showNotification('The <MatSnackBar>, an Angular Directive, is used to show a notification bar as an alternative of dialogs/popups.');
  // }
  role:String = '';
  ngOnInit(): void {

    // this.role=(localStorage.getItem('Role'));

    this.role=window.localStorage.getItem('Role') ??'';
    // window.location.reload();


    // console.log(this.role);
  }

}
