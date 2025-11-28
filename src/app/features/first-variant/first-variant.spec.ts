import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstVariant } from './first-variant';

describe('FirstVariant', () => {
  let component: FirstVariant;
  let fixture: ComponentFixture<FirstVariant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstVariant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstVariant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
