import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './Serie.component';
import { SeireListComponent } from './seire-list/seire-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeireListComponent],
  exports:[SeireListComponent]
})
export class SerieModule { }
