import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain copyright text', () => {
    const text = fixture.debugElement.nativeElement;
    expect(text.textContent).toContain('© ');
  });

  it('should render footer', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('Cognizant\'s Privacy Statement');
  });

  it('should render current year', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const component = fixture.debugElement.componentInstance;
    component.ngOnInit();
    component.currentYear = new Date().getFullYear();
    expect(component.currentYear).toBe(new Date().getFullYear());
  });
});
