import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorpageComponent } from './contractorpage.component';

describe('ContractorpageComponent', () => {
  let component: ContractorpageComponent;
  let fixture: ComponentFixture<ContractorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
