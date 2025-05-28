import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDashComponent } from './trip-dash/trip-dash.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TripDashComponent,
    TripCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    
  ],
  exports:[
    TripDashComponent
  ]
})
export class TripModule { }
