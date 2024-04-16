import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UploadQuestionsComponent } from './upload-questions.component';
import { UploadService } from 'src/app/service/upload.service';
import { MatDialogModule } from '@angular/material/dialog';

describe('UploadQuestionsComponent', () => {
  let component: UploadQuestionsComponent;
  let fixture: ComponentFixture<UploadQuestionsComponent>;
  let service : UploadService
  let router : Router

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ UploadQuestionsComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]),FormsModule,ReactiveFormsModule,MatDialogModule],
      providers: [UploadQuestionsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component = TestBed.inject(UploadQuestionsComponent)
    service = TestBed.inject(UploadService)
    router = TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});