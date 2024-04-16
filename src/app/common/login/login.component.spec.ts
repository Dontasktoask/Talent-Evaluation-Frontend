import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { LoginService } from 'src/app/service/login.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router
  let service: LoginService

  beforeEach(async() => {
    await TestBed.configureTestingModule({
	  declarations: [LoginComponent],
      imports: [HttpClientTestingModule,RouterTestingModule.withRoutes([]),FormsModule,ReactiveFormsModule],
      providers: [LoginComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component=TestBed.inject(LoginComponent)
    service=TestBed.inject(LoginService)
    router=TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
