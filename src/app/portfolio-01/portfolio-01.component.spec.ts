import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio01Component } from './portfolio-01.component';

describe('Portfolio01Component', () => {
  let component: Portfolio01Component;
  let fixture: ComponentFixture<Portfolio01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portfolio01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portfolio01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
