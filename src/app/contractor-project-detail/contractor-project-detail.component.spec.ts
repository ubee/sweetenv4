import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorProjectDetailComponent } from './contractor-project-detail.component';

describe('ContractorProjectDetailComponent', () => {
  let component: ContractorProjectDetailComponent;
  let fixture: ComponentFixture<ContractorProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorProjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
