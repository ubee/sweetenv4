import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUs01Component } from './about-us-01.component';

describe('AboutUs01Component', () => {
  let component: AboutUs01Component;
  let fixture: ComponentFixture<AboutUs01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUs01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUs01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
