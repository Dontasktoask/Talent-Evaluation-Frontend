// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { PageNotFoundComponent } from './page-not-found.component';

// describe('PageNotFoundComponent', () => {
//   let component: PageNotFoundComponent;
//   let fixture: ComponentFixture<PageNotFoundComponent>;

//   beforeEach(async() => {
//     await TestBed.configureTestingModule({
//       declarations: [ PageNotFoundComponent ]
//     })
//       .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PageNotFoundComponent);
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
import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let router: Router

  beforeEach(async() => {
    await TestBed.configureTestingModule({
	  declarations: [PageNotFoundComponent],
      imports: [HttpClientTestingModule,RouterTestingModule.withRoutes([]),FormsModule,ReactiveFormsModule],
      providers: [PageNotFoundComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component=TestBed.inject(PageNotFoundComponent)
    router=TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
