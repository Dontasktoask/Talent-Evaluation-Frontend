import { AssignEvaluationsComponent } from './assign-evaluations.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AssignEval } from 'src/app/service/assigneval.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from 'src/app/search.pipe';
import { MatDialogModule } from '@angular/material/dialog';

describe('AssignEvaluationsComponent', () => {
  let component: AssignEvaluationsComponent;
  let fixture: ComponentFixture<AssignEvaluationsComponent>;
  let service : AssignEval
  let route : Router

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ AssignEvaluationsComponent,SearchPipe ],
      imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]),FormsModule,ReactiveFormsModule,NgxPaginationModule,MatDialogModule],
      providers: [AssignEvaluationsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component = TestBed.inject(AssignEvaluationsComponent)
    service = TestBed.inject(AssignEval)
    route = TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});