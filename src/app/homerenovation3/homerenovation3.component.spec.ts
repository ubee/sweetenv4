import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homerenovation3Component } from './homerenovation3.component';

describe('Homerenovation3Component', () => {
  let component: Homerenovation3Component;
  let fixture: ComponentFixture<Homerenovation3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homerenovation3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homerenovation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
