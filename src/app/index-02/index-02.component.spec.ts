import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Index02Component } from './index-02.component';

describe('Index02Component', () => {
  let component: Index02Component;
  let fixture: ComponentFixture<Index02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Index02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
