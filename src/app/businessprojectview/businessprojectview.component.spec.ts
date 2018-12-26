import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessprojectviewComponent } from './businessprojectview.component';

describe('BusinessprojectviewComponent', () => {
  let component: BusinessprojectviewComponent;
  let fixture: ComponentFixture<BusinessprojectviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessprojectviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessprojectviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
