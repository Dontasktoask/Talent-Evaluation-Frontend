// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ConfirmDialogComponent } from './confirm-dialog.component';

// describe('ConfirmDialogComponent', () => {
//   let component: ConfirmDialogComponent;
//   let fixture: ComponentFixture<ConfirmDialogComponent>;

//   beforeEach(async() => {
//     await TestBed.configureTestingModule({
//       declarations: [ ConfirmDialogComponent ]
//     })
//       .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ConfirmDialogComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmDialogComponent } from './confirm-dialog.component';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  let router: Router

  beforeEach(async() => {
    await TestBed.configureTestingModule({
	  declarations: [ConfirmDialogComponent],
      imports: [HttpClientTestingModule,RouterTestingModule.withRoutes([]),FormsModule,ReactiveFormsModule],
      providers: [ConfirmDialogComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component=TestBed.inject(ConfirmDialogComponent)
    router=TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
