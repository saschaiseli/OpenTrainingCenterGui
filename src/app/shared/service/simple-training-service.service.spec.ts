import { TestBed } from '@angular/core/testing';

import { SimpleTrainingServiceService } from './simple-training-service.service';

describe('SimpleTrainingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleTrainingServiceService = TestBed.get(SimpleTrainingServiceService);
    expect(service).toBeTruthy();
  });
});
