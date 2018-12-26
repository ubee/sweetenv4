import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Services01Component } from './services-01.component';

describe('Services01Component', () => {
  let component: Services01Component;
  let fixture: ComponentFixture<Services01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Services01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Services01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
