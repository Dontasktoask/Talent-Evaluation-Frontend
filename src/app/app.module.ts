import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
//import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
//import { MessagesComponent } from './messages/messages.component';

import { ToastComponent } from './toast/toast.component';
// import { AuthService } from './services/auth.service';
// import { SigninRedirectComponent } from './signin-redirect/signin-redirect.component';
// import { AuthGuardService } from './services/auth-guard.service';
// import { ApiConfigService } from './services/api-config.service';

// import { AppHttpInterceptor } from './services/shared/app-http-interceptor.service';
//import { MessagesModule } from './messages/messages.module';
import { APP_BASE_HREF } from '@angular/common';

import { RegisterComponent } from './common/register/register.component';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { UploadQuestionsComponent } from './admin/upload-questions/upload-questions.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { UserSidebarComponent } from './common/user-sidebar/user-sidebar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { LookUpQuestionComponent } from './user/look-up-question/look-up-question.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { EvaluateCandidateComponent } from './user/evaluate-candidate/evaluate-candidate.component';
import { AssignEvaluationsComponent } from './admin/assign-evaluations/assign-evaluations.component';
import { UserManagmentComponent } from './admin/user-managment/user-managment.component';
import { UpdateuserComponent } from './admin/updateuser/updateuser.component';
import { SearchPipe } from './search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NotificationService } from './service/notification.service';

// export function init_app(appConfigService: ApiConfigService) {
//   return () => appConfigService.load();
// }

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LookUpQuestionComponent,
    PageNotFoundComponent,
    SidebarComponent,
    UserSidebarComponent,
    NavbarComponent,
    HomeComponent,
    UploadQuestionsComponent,
    UserManagmentComponent,
    AssignEvaluationsComponent,
    EvaluateCandidateComponent,
    UserHomeComponent,
    FooterComponent,
    UpdateuserComponent,
    SearchPipe,
    FilterPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxPaginationModule,
    BrowserModule,
    // MessagesModule,
  ],
  providers: [
    HttpClientModule,
    NotificationService
    // AuthService,
    // AuthGuardService,
  //   ApiConfigService,
  //   { provide: APP_INITIALIZER, useFactory: init_app, deps: [ApiConfigService], multi: true },
  //   { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, deps: [AuthService], multi: true },
  //   { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [NavbarComponent,UserSidebarComponent,SidebarComponent],
})
export class AppModule {}
