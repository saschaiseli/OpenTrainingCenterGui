import { TestBed } from '@angular/core/testing';

import { TrainingChartService } from './training-chart.service';

describe('TrainingChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingChartService = TestBed.get(TrainingChartService);
    expect(service).toBeTruthy();
  });
});
