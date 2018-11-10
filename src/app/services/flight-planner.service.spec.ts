import { TestBed, inject } from '@angular/core/testing';

import { FlightPlannerService } from './flight-planner.service';

describe('DronFlightPlannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightPlannerService]
    });
  });

  it('should be created', inject([FlightPlannerService], (service: FlightPlannerService) => {
    expect(service).toBeTruthy();
  }));
});
