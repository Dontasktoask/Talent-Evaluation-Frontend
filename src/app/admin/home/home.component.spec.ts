import { FilterPipe } from './../../filter.pipe';
import { SearchPipe } from './../../search.pipe';
import { AdminhomeService } from './../../service/adminhome.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { NgxPaginationModule } from 'ngx-pagination';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service : AdminhomeService


  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent,SearchPipe,FilterPipe],
      imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]),FormsModule,ReactiveFormsModule,NgxPaginationModule],
      providers: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component = TestBed.inject(HomeComponent)
    service = TestBed.inject(AdminhomeService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});