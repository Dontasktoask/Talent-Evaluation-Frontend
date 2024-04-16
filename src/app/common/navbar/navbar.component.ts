import { LoginService } from './../../service/login.service';
import { Router } from '@angular/router';
import { LogoutService } from './../../service/logout.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/service/navbar.service';
import { NotificationService } from 'src/app/service/notification.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  alert=false;
  success: boolean = false;
  close:boolean = false;
  name:string='';
  user:any;
  constructor(private logout:LogoutService, public navbar: NavbarService, public router:Router,private login:LoginService,private userService:NotificationService) {}

  // value='User Name';
  ngOnInit(): void {
    this.userService.notificationSubject.subscribe(d =>{
      this.user = d;
    })
  }

  getData(){
    this.login.getLoginDetail().subscribe((result)=>{
      this.name=result.userName;
      console.log(this.name);
    })
  }

  collection(){
    // console.log('User Logout Successfully');
    this.logout.logoutUser(this.name).subscribe((result) => {

      setTimeout(() => {
        this.router.navigate(['Login']);

      }, 1000);
      localStorage.removeItem('Role');
      localStorage.removeItem('userId');
      console.log(result);
      this.success=true;
      this.alert=true;
    });
  }

}
