import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserhomeService } from 'src/app/service/userhome.service';
import { AssignEval } from 'src/app/service/assigneval.service';
import { SidebarService } from 'src/app/service/sidebar.service';
import { NavbarService } from 'src/app/service/navbar.service';
import { AdminHome } from 'src/app/model/adminhome';

@Component({
  selector: 'app-evaluate-candidate',
  templateUrl: './evaluate-candidate.component.html',
  styleUrls: ['./evaluate-candidate.component.css'],
})
export class EvaluateCandidateComponent implements OnInit {

  evaluationData: AdminHome[] = [];
  pendingData: AdminHome[] =[];
  evaluateData:any;

  data: any;
  value = 0;
  slidervalue: number = 0;

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }

  evaluateCandidateForm = new FormGroup({
    //FeedBack Detailed and Normal
    detailed_feedback: new FormControl('', [Validators.required]),
    feedback: new FormControl('', [Validators.required]),
    //Technical skill
    product_and_frameworks: new FormControl('0', [Validators.required]),
    programming_languages: new FormControl('0', [Validators.required]),
    engineering_maturity: new FormControl('0', [Validators.required]),
    platforms: new FormControl('0', [Validators.required]),
    agile_maturity: new FormControl('0', [Validators.required]),
    //Soft Skill
    communications: new FormControl('0', [Validators.required]),
    collaboration: new FormControl('0', [Validators.required]),
    problem_solving: new FormControl('0', [Validators.required]),
    leadership: new FormControl('0', [Validators.required]),
  });

  get detailed_feedback() {
    return this.evaluateCandidateForm.get('detailed_feedback');
  }
  get feedback() {
    return this.evaluateCandidateForm.get('feedback');
  }
  get product_and_frameworks() {
    return this.evaluateCandidateForm.get('product_and_frameworks');
  }
  get programming_languages() {
    return this.evaluateCandidateForm.get('programming_languages');
  }
  get engineering_maturity() {
    return this.evaluateCandidateForm.get('engineering_maturity');
  }
  get platforms() {
    return this.evaluateCandidateForm.get('platforms');
  }
  get agile_maturity() {
    return this.evaluateCandidateForm.get('agile_maturity');
  }
  get communications() {
    return this.evaluateCandidateForm.get('communications');
  }
  get collaboration() {
    return this.evaluateCandidateForm.get('collaboration');
  }
  get problem_solving() {
    return this.evaluateCandidateForm.get('problem_solving');
  }
  get leadership() {
    return this.evaluateCandidateForm.get('leadership');
  }


  constructor(
        private evalData: AssignEval,
        private service: UserhomeService,
        private router: ActivatedRoute,
        public nav: SidebarService,
        public navbar: NavbarService
  ) {}

  collection() {
    // To post data after submitting the form
    console.log(this.evaluateCandidateForm.value);
    this.evalData.evaluateCandidate(this.evaluateCandidateForm.value).subscribe((result) => {
      // console.log(result);
    });
  }
  // To delete local storage
  deletelocalstorage() {
    localStorage.removeItem('evaluationId');
  }

  ngOnInit(): void {
    this.nav.show();
    this.nav.doSomethingElseUseful();
    this.navbar.show();
    this.navbar.doSomethingElseUseful();

    var userId = localStorage.getItem('userId');
    var candidate = localStorage.getItem('evaluationId');
   
    this.evalData.getEvaluationData(userId).subscribe((result) => {
      this.data = result;
      this.pendingData = this.data?.Pending;

      console.log(this.evaluateData);
     
      // Code starts here
      this.evaluateData=this.pendingData.filter((elm:any)=>{
        return elm['soId']=== localStorage.getItem('soId');

      })

      console.log(this.evaluateData);

    });
  }
}
