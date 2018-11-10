import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ListViewComponent } from './list-view.component';
import { FlightPlannerService } from '../services/flight-planner.service';

@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [ ListViewComponent ],
  providers: [ FlightPlannerService ],
  declarations: [ListViewComponent]
})
export class ListViewModule {}
