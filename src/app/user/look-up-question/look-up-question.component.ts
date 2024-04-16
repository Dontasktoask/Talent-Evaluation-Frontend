import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavbarService } from 'src/app/service/navbar.service';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-look-up-question',
  templateUrl: './look-up-question.component.html',
  styleUrls: ['./look-up-question.component.css']
})
export class LookUpQuestionComponent implements OnInit {
  lookUpForm = new FormGroup({
    technology: new FormControl('', [Validators.required]),
    level: new FormControl('', [Validators.required,]),
  });


  //Validation LookUp
  get technology(){
    return this.lookUpForm.get('technology')
  }
  get level(){
    return this.lookUpForm.get('level')
  }
  constructor(public nav:SidebarService,public navbar:NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
    this.nav.doSomethingElseUseful();
    this.navbar.show();
    this.navbar.doSomethingElseUseful();
  }

}
