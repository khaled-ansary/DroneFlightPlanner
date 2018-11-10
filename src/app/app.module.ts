import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapViewModule } from './map-view/map-view.module';
import { FlightPlannerService } from './services/flight-planner.service';
import { ListViewModule } from './list-view/list-view.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MapViewModule,
    ListViewModule
  ],
  providers: [FlightPlannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
