import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorRegisterComponent } from './contractor-register.component';

describe('ContractorRegisterComponent', () => {
  let component: ContractorRegisterComponent;
  let fixture: ComponentFixture<ContractorRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
