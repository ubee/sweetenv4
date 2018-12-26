import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithomerenovationComponent } from './edithomerenovation.component';

describe('EdithomerenovationComponent', () => {
  let component: EdithomerenovationComponent;
  let fixture: ComponentFixture<EdithomerenovationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdithomerenovationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithomerenovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
