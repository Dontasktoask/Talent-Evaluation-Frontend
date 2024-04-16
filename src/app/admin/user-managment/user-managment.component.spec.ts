import { FilterPipe } from './../../filter.pipe';
import { SearchPipe } from 'src/app/search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsermanagmentService } from 'src/app/service/usermanagment.service';
import { UserManagmentComponent } from './user-managment.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';

describe('UserManagmentComponent', () => {
  let component: UserManagmentComponent;
  let fixture: ComponentFixture<UserManagmentComponent>;
  let service : UsermanagmentService
  let router : Router

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagmentComponent,SearchPipe,FilterPipe],
      imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]),FormsModule,ReactiveFormsModule,NgxPaginationModule,MatDialogModule],
      providers: [UserManagmentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component = TestBed.inject(UserManagmentComponent)
    service = TestBed.inject(UsermanagmentService)
    router = TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});