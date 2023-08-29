import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumGreenButtonComponent } from './medium-green-button.component';

describe('MediumGreenButtonComponent', () => {
  let component: MediumGreenButtonComponent;
  let fixture: ComponentFixture<MediumGreenButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediumGreenButtonComponent]
    });
    fixture = TestBed.createComponent(MediumGreenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
