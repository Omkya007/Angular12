import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { MatButtonModule } from '@angular/material/button';
import { TouristDashComponent } from './tourist-dash/tourist-dash.component';
import { TouristCardComponent } from './tourist-card/tourist-card.component';




@NgModule({
  declarations: [
   
  
    TouristDashComponent,
           TouristCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatButtonModule
  ],
  exports:[
   TouristDashComponent

  ]
})
export class Tourist1Module { }
