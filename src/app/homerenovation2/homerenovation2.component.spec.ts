import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homerenovation2Component } from './homerenovation2.component';

describe('Homerenovation2Component', () => {
  let component: Homerenovation2Component;
  let fixture: ComponentFixture<Homerenovation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homerenovation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homerenovation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
