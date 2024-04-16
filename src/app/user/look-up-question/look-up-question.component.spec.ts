import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookUpQuestionComponent } from './look-up-question.component';

describe('LookUpQuestionComponent', () => {
  let component: LookUpQuestionComponent;
  let fixture: ComponentFixture<LookUpQuestionComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ LookUpQuestionComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookUpQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
