import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { UploadQuestionsComponent } from './admin/upload-questions/upload-questions.component';
import { UserManagmentComponent } from './admin/user-managment/user-managment.component';
import { AssignEvaluationsComponent } from './admin/assign-evaluations/assign-evaluations.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { LookUpQuestionComponent } from './user/look-up-question/look-up-question.component';

import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { EvaluateCandidateComponent } from './user/evaluate-candidate/evaluate-candidate.component';

import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { UpdateuserComponent } from './admin/updateuser/updateuser.component';
// import { EavluatorModelComponent } from './admin/eavluator-model/eavluator-model.component';

//import { MessagesComponent } from './messages/messages.component';
//import { SigninRedirectComponent } from './signin-redirect/signin-redirect.component';
//import { AuthGuardService } from './services/auth-guard.service';
//import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // { path: 'signin-redirect', component: SigninRedirectComponent },

  { path: '', redirectTo: '/Register',pathMatch: 'full' },
  { path: 'Login',component: LoginComponent },
  { path: 'Register', component: RegisterComponent },

  { path: 'Home', component: HomeComponent },
  { path: 'UploadQuestion', component: UploadQuestionsComponent },
  { path: 'AssignEvaluation', component: AssignEvaluationsComponent },
  { path: 'UserManagment', component: UserManagmentComponent },
  { path: 'EvaluationModel', component: AssignEvaluationsComponent },
  { path: 'Evaluate-candidate', component: EvaluateCandidateComponent },
  { path: 'User-Home', component: UserHomeComponent },
  { path: 'Lookup-question', component: LookUpQuestionComponent },
  // { path: 'pop-up', component: EavluatorModelComponent },
  { path: 'updateUser/:evaluationId', component: UpdateuserComponent},
  { path: '**', component: PageNotFoundComponent },

  //{ path:'usermanagement', component:UsermanagementComponent},
  // {
  //  { path: '', component: HomepageComponent}



  //   children: [
  //     //{ path: 'messages', component: MessagesComponent, canActivate: [AuthGuardService] },
  //     //{ path: '', component: DashboardComponent, canActivate: [AuthGuardService] },
  //     { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
