import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapViewModule } from './map-view/map-view.module';
import { FlightPlannerService } from './services/flight-planner.service';
import { ListViewModule } from './list-view/list-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MapViewModule,
    ListViewModule
  ],
  providers: [FlightPlannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
