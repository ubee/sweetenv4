import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Index01Component } from './index-01.component';

describe('Index01Component', () => {
  let component: Index01Component;
  let fixture: ComponentFixture<Index01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Index01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
