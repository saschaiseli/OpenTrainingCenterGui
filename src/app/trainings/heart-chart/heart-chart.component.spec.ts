import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartChartComponent } from './heart-chart.component';

describe('HeartChartComponent', () => {
  let component: HeartChartComponent;
  let fixture: ComponentFixture<HeartChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
