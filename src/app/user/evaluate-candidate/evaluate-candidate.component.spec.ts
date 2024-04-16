import { UsermanagmentService } from 'src/app/service/usermanagment.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSliderModule } from '@angular/material/slider';
import { EvaluateCandidateComponent } from './evaluate-candidate.component';
import { UploadService } from 'src/app/service/upload.service';


describe('EvaluateCandidateComponent', () => {
  let component: EvaluateCandidateComponent;
  let fixture: ComponentFixture<EvaluateCandidateComponent>;
  let service : UploadService
  let getUser: UsermanagmentService
  let router : Router


  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateCandidateComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]),FormsModule,ReactiveFormsModule ,MatSliderModule],
      providers: [EvaluateCandidateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component = TestBed.inject(EvaluateCandidateComponent)
    service = TestBed.inject(UploadService)
    getUser = TestBed.inject(UsermanagmentService)
    router = TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});