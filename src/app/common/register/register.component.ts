import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SidebarService } from 'src/app/service/sidebar.service';
import { NavbarService } from 'src/app/service/navbar.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  PasswordData: string =
    'Password must be 8-25 characters long and contain at least one letter and one number. Password is case sensitive. Accepted special chars !  # $ % & ( ) * + - _ . / : ; < = > ? @ [  ] ^ { | }';
  fail: boolean = false;
  success: boolean = false;
  submitted = false;

  role: any;
  responseMessage: any;
  repeatPass: string = 'none';

  show:boolean=true;
  hide:boolean=true;
 
  register = new FormGroup({
    associateId: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(8),
      Validators.pattern('^[0-9]*'),
    ]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    projectRole: new FormControl('', [
      Validators.required
    ]),
    techStack: new FormControl('', [
      Validators.required
    ]),
    userName: new FormControl('', [
      Validators.required,
      Validators.maxLength(64),
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.([a-zA-Z]{2,3})$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(25),
      Validators.pattern(''),

      // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')
    ]),
    confirmPassword: new FormControl('', [
      Validators.required
    ]),
    systemRole: new FormControl('Evaluator', [
      Validators.required
    ]),
  });

  // To validate Register
  get associateId() {
    return this.register.get('associateId') as FormControl;
  }
  get firstName() {
    return this.register.get('firstName') as FormControl;
  }
  get lastName() {
    return this.register.get('lastName') as FormControl;
  }
  get techStack() {
    return this.register.get('techStack') as FormControl;
  }
  get projectRole() {
    return this.register.get('projectRole') as FormControl;
  }
  get userName() {
    return this.register.get('userName') as FormControl;
  }
  get password() {
    return this.register.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.register.get('confirmPassword') as FormControl;
  }

  // validateSubmit() {

  //   if (this.register.controls['password'].value !== this.register.controls['confirmPassword'].value) {
  //     console.log('Not match');
  //   }
  // }
  constructor(
        private regi: RegisterService,
        private route: Router,
        public nav: SidebarService,
        public navbar: NavbarService,
        private userService: NotificationService
  ) {}

  ngOnInit(): void {
    this.nav.hide();
    this.navbar.hide();
    console.log(this.register);
  }
  // Behavioue Subject with
  sendMessage(data: any) {
    this.userService.sendNotification(data.value);
  }

  // To visibility of password
  // show(){

  // }
  collection() {
    this.submitted = true;
    this.regi.registerUser(this.register.value).subscribe(
      (result: any) => {
        localStorage.setItem('Role', result.message);
        this.role = result.message;
        // console.log(this.role);
      },
      (err) => {
        this.fail = true;
      }
    );
    if (this.register.invalid && this.submitted === true) {
      this.fail = true;
      // alert("Fill the details");
    } else if (this.register.controls['password'].value != this.register.controls['confirmPassword'].value) {
      // alert('Password should match');
      this.repeatPass = 'inline';
    } else if (
      this.register.valid &&
            this.register.controls['password'].value === this.register.controls['confirmPassword'].value
    ) {
      // alert('Register Successful');
      this.success = true;
      setTimeout(() => {
        this.route.navigate(['User-Home']);
      }, 2000);
    }
  }
}
