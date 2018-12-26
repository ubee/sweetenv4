import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessrenovationComponent } from './businessrenovation.component';

describe('BusinessrenovationComponent', () => {
  let component: BusinessrenovationComponent;
  let fixture: ComponentFixture<BusinessrenovationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessrenovationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessrenovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
