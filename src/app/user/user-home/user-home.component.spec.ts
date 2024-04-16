import { UserhomeService } from 'src/app/service/userhome.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserHomeComponent } from './user-home.component';
import { SearchPipe } from 'src/app/search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

describe('UserHomeComponent', () => {
  let component: UserHomeComponent;
  let fixture: ComponentFixture<UserHomeComponent>;
  let service : UserhomeService
  let router : Router

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeComponent,SearchPipe],
      imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]),FormsModule,ReactiveFormsModule,NgxPaginationModule],
      providers: [UserHomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component = TestBed.inject(UserHomeComponent)
    service = TestBed.inject(UserhomeService)
    router = TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});