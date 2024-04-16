// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { SidebarComponent } from './sidebar.component';

// describe('SidebarComponent', () => {
//   let component: SidebarComponent;
//   let fixture: ComponentFixture<SidebarComponent>;

//   beforeEach(async() => {
//     await TestBed.configureTestingModule({
//       declarations: [ SidebarComponent ]
//     })
//       .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SidebarComponent);
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
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let router: Router

  beforeEach(async() => {
    await TestBed.configureTestingModule({
	  declarations: [SidebarComponent],
      imports: [HttpClientTestingModule,RouterTestingModule.withRoutes([]),FormsModule,ReactiveFormsModule],
      providers: [SidebarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component=TestBed.inject(SidebarComponent)
    router=TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});