import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationsDashboardComponent } from './calculations-dashboard.component';

describe('CalculationsDashboardComponent', () => {
  let component: CalculationsDashboardComponent;
  let fixture: ComponentFixture<CalculationsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
