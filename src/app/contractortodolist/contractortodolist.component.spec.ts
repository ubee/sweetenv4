import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractortodolistComponent } from './contractortodolist.component';

describe('ContractortodolistComponent', () => {
  let component: ContractortodolistComponent;
  let fixture: ComponentFixture<ContractortodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractortodolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractortodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
