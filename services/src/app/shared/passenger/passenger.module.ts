import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassDashComponent } from './pass-dash/pass-dash.component';
import { CountComponent } from './count/count.component';
import { PassCardComponent } from './pass-card/pass-card.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PassDashComponent,
    CountComponent,
    PassCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    PassDashComponent
  ]
})
export class PassengerModule { }
