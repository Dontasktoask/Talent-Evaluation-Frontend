import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { SidebarService } from 'src/app/service/sidebar.service';
import { NavbarService } from 'src/app/service/navbar.service';
import { NotificationService } from 'src/app/service/notification.service';
// import { ToastrService } from 'ngx-toastr';

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  fail: boolean = false;
  success: boolean = false;
  submitted = false;
  login = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  //Validation Login
  get userName() {
    return this.login.get('userName') as FormControl;
  }
  get password() {
    return this.login.get('password') as FormControl;
  }

  constructor(private router: Router, private logi:LoginService, public nav :SidebarService, public navbar:NavbarService,private userService:NotificationService) {}

  role:any;
  userId:any;
  ngOnInit(): void {
    this.nav.hide();
    this.navbar.hide();
    this.role = localStorage.getItem('Role');
    this.userId = localStorage.getItem('UserId');
  }

  resetForm(){
    this.login.reset();
  }
  // Behavioue Subject with
  sendMessage(data:any){
    this.userService.sendNotification(data.value);
  }
  collection() {
    this.submitted=true;

    if(this.login.invalid && this.submitted === true){
      this.fail=true
    }

    this.logi.loginUser(this.login.value).subscribe((result:any) => {
      localStorage.setItem('Role',result.message);
      this.role=result.message;
      // console.log(this.role);

      localStorage.setItem('userId',result.id);
      this.userId=result.id;
      // console.log(this.userId);

      if (result.message ==='User logged in successfully - Admin' && this.login.valid){
        this.success=true;
        setTimeout(() => {
          this.router.navigate(['Home']);
        }, 2000);
      }
      else if(result.message ==='User logged in successfully - Evaluator' && this.login.valid){
        this.success=true;
        setTimeout(() => {
          this.router.navigate(['User-Home']);
        }, 2000);


      }
      // this.login.reset();
    },
    err=>{
      this.fail=true;
    },
    )

  }

}
