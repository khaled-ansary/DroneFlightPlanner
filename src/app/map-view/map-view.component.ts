import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Flight } from '../models/flight';
declare var google: any;

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, OnChanges {

  @Input()
  flight;

  options;
  overlays: any[];
  constructor() { }

  ngOnInit() {
    this.options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };
  }

  ngOnChanges() {
    console.log(this.flight);
    this.overlays = [];
    if (this.flight && this.flight.points) {
      for (const point of this.flight.points) {
        this.overlays.push(
          new google.maps.Polyline({path:
            [{lat: point.start.lat, lng: point.start.lng},
            {lat: point.end.lat, lng: point.end.lat }],
          geodesic: true, strokeColor: '#FF0000',
          strokeOpacity: 0.5, strokeWeight: 2}));
      }
      console.log(this.overlays);
    }

  }

  handleMapClick(event) {

  }

}
