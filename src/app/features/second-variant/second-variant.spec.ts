import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondVariant } from './second-variant';

describe('SecondVariant', () => {
  let component: SecondVariant;
  let fixture: ComponentFixture<SecondVariant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondVariant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondVariant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
