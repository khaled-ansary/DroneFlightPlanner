import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../models/config';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})

/**
 * Service class for flight planner
 */
export class FlightPlannerService {

  constructor(private http: HttpClient) { }

  /** get list of flights */
  getFlights() {
    const flights = this.getFromLocalStorage();
    return flights;
  }

  /** get a single flight by id */
  getFlight( id ) {
    const flights = this.getFlights();
    const flight = flights.find(flight_ => flight_.filghtId === id );
    return flight;
  }

  /**
   * Save a new flight ;
   * @param flight
   */
  saveFlight( flight ) {
    const flights = this.getFlights();
    flights.push(flight);
    this.saveInLocalStorage(flights);
  }

  /** delete a filght by id */
  deleteFlight( id ) {
    const flights = this.getFlights();
    flights.find( flight_ => {
      if ( flight_.filghtId === id ) {
        flights.pop(flight_);
      }
    });
    this.saveInLocalStorage(flights);
  }

  /** update a flight update flight data*/
  updateFlight(  updatedFlight ) {
    const flights = this.getFlights();
    flights.find(flight_ => {
        if ( flight_.filghtId === updatedFlight.id ) {
            flight_ = updatedFlight;
        }
    });
    this.saveInLocalStorage(flights);
  }

  /**
   * load initial flights data
   */
  initialLoadedFlights() {
    // get flights using api url
    const flights = this.http.get<Flight>( Config.apiUrl );
    flights.subscribe(
      data => {
        localStorage.setItem(Config.storageId, JSON.stringify(data));
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  /** get data from to localstorage */
  saveInLocalStorage( flights ) {
    localStorage.setItem(Config.storageId, flights );
  }

  /** get data from local storage */
  getFromLocalStorage() {
    const flights = localStorage.getItem(Config.storageId);
    return JSON.parse(flights);
  }

}
