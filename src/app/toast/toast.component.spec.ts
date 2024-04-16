import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA ,MatSnackBar } from '@angular/material/snack-bar';


import { ToastComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ToastComponent],
      providers: [
        {
          provide: MatSnackBarRef,
          useValue: {},
        },
        {
          provide: MAT_SNACK_BAR_DATA,
          useValue: {},
        },
        {
          provide: MatSnackBar,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
