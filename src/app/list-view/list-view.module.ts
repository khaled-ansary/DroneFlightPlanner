import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ ListViewComponent ],
  declarations: [ListViewComponent]
})
export class ListViewModule { }
