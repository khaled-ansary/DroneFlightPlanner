import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  options;
  overlays: any[];
  constructor() { }

  ngOnInit() {
    this.options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };
    this.overlays = [
        new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
    ];
  }

}
