import { Component, OnInit } from '@angular/core';
import { FlightPlannerService } from '../services/flight-planner.service';
import { Flight } from '../models/flight';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  flights: Array<Flight> = [];
  selectedFlight: Flight;
  
  constructor(private flightPlannerService: FlightPlannerService) { }

  ngOnInit() {
    this.flights = this.flightPlannerService.getFlights();
  }

}
