import { NavbarComponent } from './navbar.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


describe('RegisterComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router : Router

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]),FormsModule,ReactiveFormsModule],
      providers: [NavbarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component = TestBed.inject(NavbarComponent)
    router = TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});