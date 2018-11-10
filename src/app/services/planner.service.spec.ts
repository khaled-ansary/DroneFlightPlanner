import { TestBed, inject } from '@angular/core/testing';

import { DronFlightPlannerService } from './flight-planner.service';

describe('DronFlightPlannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DronFlightPlannerService]
    });
  });

  it('should be created', inject([DronFlightPlannerService], (service: DronFlightPlannerService) => {
    expect(service).toBeTruthy();
  }));
});
