import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
//import { AuthService } from './services/auth.service';
//import { AuthStubService } from './services/auth.service.mock';

describe('AppComponent', () => {
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatSnackBarModule, BrowserAnimationsModule, HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: MatSnackBarRef,
          useValue: {},
        },
        {
          provide: MAT_SNACK_BAR_DATA,
          useValue: {},
        },


      ],
    }).compileComponents();
  });

  it('should have as title \'quickstart-template-angular-helloworld-client\'', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('quickstart-template-angular-helloworld-client');
  });
});
