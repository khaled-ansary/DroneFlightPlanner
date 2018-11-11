import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FlightPlannerService } from '../services/flight-planner.service';
import { Flight } from '../models/flight';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  flights: Flight[];
  selectedFlight: Flight;
  @Output() rowSelect = new EventEmitter<Flight>();

  constructor(private flightPlannerService: FlightPlannerService) { }

  ngOnInit() {
    this.flights = this.flightPlannerService.getFlights();
  }

  onRowSelect(event) {
    console.log(event.data);
    this.rowSelect.emit(event.data);
  }
}
