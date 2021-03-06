import { Component } from '@angular/core';
import { FlightPlannerService } from './services/flight-planner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedFlight;
  constructor(private flightPlannerService: FlightPlannerService) {
    // load flight data if it doesn't exist
    if (!this.flightPlannerService.getFlights()) {
      this.flightPlannerService.initialLoadedFlights();
    }
  }

  onFlightSelect(flight) {
    this.selectedFlight = flight;
    console.log(this.selectedFlight);
  }
}
