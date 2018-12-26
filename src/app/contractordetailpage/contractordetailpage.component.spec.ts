import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractordetailpageComponent } from './contractordetailpage.component';

describe('ContractordetailpageComponent', () => {
  let component: ContractordetailpageComponent;
  let fixture: ComponentFixture<ContractordetailpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractordetailpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractordetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
