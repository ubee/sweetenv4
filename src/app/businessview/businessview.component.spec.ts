import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessviewComponent } from './businessview.component';

describe('BusinessviewComponent', () => {
  let component: BusinessviewComponent;
  let fixture: ComponentFixture<BusinessviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
