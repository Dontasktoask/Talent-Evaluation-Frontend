import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssignEval } from 'src/app/service/assigneval.service';
import { Users } from 'src/app/model/user';
import { UsermanagmentService } from 'src/app/service/usermanagment.service';
import { SidebarService } from 'src/app/service/sidebar.service';
import { NavbarService } from 'src/app/service/navbar.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-assign-evaluations',
  templateUrl: './assign-evaluations.component.html',
  styleUrls: ['./assign-evaluations.component.css'],
})
export class AssignEvaluationsComponent implements OnInit {
    @ViewChild('assignDialog') assignDialog!: TemplateRef<any>;
    @ViewChild('confirmUpdate')confirmUpdate!:TemplateRef<any>;

    alert: boolean = false;
    searchText = '';
    currentUserId: any;
    data: any;
    users: Users[] = [];
    p: number = 1;
    currentDate:any=new Date();
    date=this.currentDate;
    fail: boolean = false;
    success: boolean = false;
    submitted = false;

    evaluatorData = {
      soId: '',
      soRole: '',
      candidateId: '',
      candidateStack: '',
      candidateFirstName: '',
      candidateLastName: '',
      upload_resume: '',

      evaluatorId: '',
      evaluatorFirstName: '',
      evaluatorLastName: '',
    };


    editable: boolean = false;

    assignEvalForm = new FormGroup({
      soId: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*'),
      ]),
      soRole: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z|_ -]*$'),
      ]),

      //Candidate Validation

      candidateId: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
      candidateStack: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      candidateFirstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      candidateLastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      upload_resume: new FormControl('', [Validators.required]),

      //Evaluator Validation

      evaluatorId: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(6),
        Validators.maxLength(8),
      ]),
      evaluatorFirstName: new FormControl('', [Validators.required]),
      evaluatorLastName: new FormControl('', [Validators.required]),
      evaluationDate: new FormControl('', [Validators.required]),
    });

    displayStyle = '';
    openPopup() {
      this.displayStyle = 'block';
    }
    closePopup() {
      this.displayStyle = 'none';
    }
    // Validation assign Eval
    get soId() {
      return this.assignEvalForm.get('soId') as FormControl;
    }
    get soRole() {
      return this.assignEvalForm.get('soRole') as FormControl;
    }
    get candidateId() {
      return this.assignEvalForm.get('candidateId') as FormControl;
    }
    get candidateStack() {
      return this.assignEvalForm.get('candidateStack') as FormControl;
    }
    get candidateFirstName() {
      return this.assignEvalForm.get('candidateFirstName') as FormControl;
    }
    get candidateLastName() {
      return this.assignEvalForm.get('candidateLastName') as FormControl;
    }
    get upload_resume() {
      return this.assignEvalForm.get('upload_resume') as FormControl;
    }
    get evaluatorId() {
      return this.assignEvalForm.get('evaluatorId') as FormControl;
    }
    get evaluatorFirstName() {
      return this.assignEvalForm.get('evaluatorFirstName') as FormControl;
    }
    get evaluatorLastName() {
      return this.assignEvalForm.get('evaluatorLastName') as FormControl;
    }
    get evaluationDate() {
      return this.assignEvalForm.get('evaluationDate') as FormControl;
    }

    constructor(
        private assign: AssignEval,
        private service: UsermanagmentService,
        private router: Router,
        public nav: SidebarService,
        public navbar: NavbarService,
        private readonly dialog: MatDialog
    ) {}
    formModal: any;
    ngOnInit(): void {
      this.nav.show();
      this.nav.doSomethingElseUseful();
      this.navbar.show();
      this.navbar.doSomethingElseUseful();
      this.service.getallUsers().subscribe((data) => {
        this.users = data;
      });
    }
    collection() {
      // To post the data
      this.submitted = true;
      if(this.assignEvalForm.invalid && this.submitted === true)
      {
        this.fail=true;
      }
      else if(this.assignEvalForm.valid && this.submitted === true){
        this.assign.assignEvlauation(this.assignEvalForm.value).subscribe((result) => {
          this.router.navigate(['AssignEvaluation']);
        });
        this.success=true;
      }

    }

    getdata(associateId: number) {


      this.service.getCurrentUser(associateId).subscribe((result) => {
        this.currentUserId = associateId;

        this.evaluatorData=result;
        this.evaluatorData.evaluatorId=result.associateId;
        this.evaluatorData.evaluatorFirstName=result.firstName;
        this.evaluatorData.evaluatorLastName=result.lastName;
      });
      this.router.navigate(['AssignEvaluation']);
    }


    // getEvaluatorData(evaluatorId: number) {
    //   // console.log(this.evaluatorData);
    //   this.Evaluatordata.getEvaluationData(evaluatorId).subscribe((result) => {

    //     // this.currentUserId = associateId;
    //     console.log(result);
    //     this.assignEvalForm = new FormGroup({
    //       evaluatorId: new FormControl(result),
    //       firstName: new FormControl(result),
    //       lastName: new FormControl(result),
    //     });
    //     console.log(this.assignEvalForm.value);
    //   });
    // }

    openEvalDetails() {
      this.dialog.open(this.assignDialog, {
        height: '500px',
        width: '1000px',
      });
    }
    confirmAssign(){
      this.dialog.open(this.confirmUpdate,{
        height: '300px',
        width: '600px',
      })
    }
   

    clearForm(){
      this.assignEvalForm.reset();
    }
    closeAlert() {
      this.alert = false;
    }
}
