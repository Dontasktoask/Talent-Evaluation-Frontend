import { UpdateuserComponent } from './updateuser.component';
import { UsermanagmentService } from './../../service/usermanagment.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('UpdateuserComponent', () => {
  let component: UpdateuserComponent;
  let fixture: ComponentFixture<UpdateuserComponent>;
  let service : UsermanagmentService
  let router : Router

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateuserComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]),FormsModule,ReactiveFormsModule],
      providers: [UpdateuserComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component = TestBed.inject(UpdateuserComponent)
    service = TestBed.inject(UsermanagmentService)
    router = TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});