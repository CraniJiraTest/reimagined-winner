import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBlueButtonComponent } from './big-blue-button.component';

describe('BigBlueButtonComponent', () => {
  let component: BigBlueButtonComponent;
  let fixture: ComponentFixture<BigBlueButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigBlueButtonComponent]
    });
    fixture = TestBed.createComponent(BigBlueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
