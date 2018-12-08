import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltitudeChartComponent } from './altitude-chart.component';

describe('AltitudeChartComponent', () => {
  let component: AltitudeChartComponent;
  let fixture: ComponentFixture<AltitudeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltitudeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltitudeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
