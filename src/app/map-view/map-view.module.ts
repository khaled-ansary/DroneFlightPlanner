import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapViewComponent } from './map-view.component';
import { GMapModule } from 'primeng/gmap';

@NgModule({
  imports: [
    CommonModule,
    GMapModule
  ],
  exports: [MapViewComponent],
  declarations: [MapViewComponent]
})
export class MapViewModule { }
