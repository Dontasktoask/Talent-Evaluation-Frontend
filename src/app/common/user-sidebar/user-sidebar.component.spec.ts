// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { UserSidebarComponent } from './user-sidebar.component';

// describe('UserSidebarComponent', () => {
//   let component: UserSidebarComponent;
//   let fixture: ComponentFixture<UserSidebarComponent>;

//   beforeEach(async() => {
//     await TestBed.configureTestingModule({
//       declarations: [ UserSidebarComponent ]
//     })
//       .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserSidebarComponent);
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
import { UserSidebarComponent } from './user-sidebar.component';

describe('UserSidebarComponent', () => {
  let component: UserSidebarComponent;
  let fixture: ComponentFixture<UserSidebarComponent>;
  let router: Router

  beforeEach(async() => {
    await TestBed.configureTestingModule({
	  declarations: [UserSidebarComponent],
      imports: [HttpClientTestingModule,RouterTestingModule.withRoutes([]),FormsModule,ReactiveFormsModule],
      providers: [UserSidebarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSidebarComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    component=TestBed.inject(UserSidebarComponent)
    router=TestBed.inject(Router)
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

