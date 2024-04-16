import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminHome } from 'src/app/model/adminhome';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SidebarService } from 'src/app/service/sidebar.service';
import { NavbarService } from 'src/app/service/navbar.service';
import { AssignEval } from 'src/app/service/assigneval.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  evaluationData: AdminHome[] = [];
  completedData: any = [];
  pendingData: AdminHome[] = [];
  currentUserId: any;
  searchText = '';
  data: any;

  // to send data in evaluate candidate page
  pending:any;

  p: number = 1;
  c: number = 1;



  userForm = new FormGroup({
    soId: new FormControl('', Validators.required),
    candidateStack: new FormControl('', Validators.required),
    candidateFirstName: new FormControl('', Validators.required),
    candidateLastName: new FormControl('', Validators.required),
    soRole: new FormControl('', Validators.required),
    evaluationDate: new FormControl('', Validators.required),
  });

  get vassst() {
    return this.userForm.get('candidateStack');
  }
  get vassid() {
    return this.userForm.get('soId');
  }
  get vfname() {
    return this.userForm.get('candidateFirstName');
  }
  get vlname() {
    return this.userForm.get('candidateLastName');
  }
  get vsoRole() {
    return this.userForm.get('soRole');
  }
  get vevaluationDate() {
    return this.userForm.get('evaluationDate');
  }

  constructor(
        // private service: UserhomeService,
        private evalData: AssignEval,
        private route: Router,
        public nav: SidebarService,
        public navbar: NavbarService
  ) {}

  getEvaluationData(evaluationId: any) {
    localStorage.setItem('evaluationId',evaluationId);
    
    this.route.navigate(['Evaluate-candidate']);
    console.log(evaluationId);
  }
  // userId:any;
  ngOnInit(): void {

    this.nav.show();
    this.nav.doSomethingElseUseful();
    this.navbar.show();
    this.navbar.doSomethingElseUseful();

    // console.log(localStorage.getItem('userId'));
    var userId=localStorage.getItem('userId');

    this.evalData.getEvaluationData(userId).subscribe((result)=>{

      this.data=result;
      this.completedData=this.data?.Completed;
      this.pendingData=this.data?.Pending;

      for(let i=0; i<this.pendingData.length;i++)
      {
        this.pending=this.pendingData[i];
        // console.log(this.pending);
      }
      
    })


  }

}
