import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UploadquestionsComponent } from './uploadquestions.component';

describe('UploadquestionsComponent', () => {
  let component: UploadquestionsComponent;
  let fixture: ComponentFixture<UploadquestionsComponent>;
  let router: Router;
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ UploadquestionsComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule.withRoutes([])]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
