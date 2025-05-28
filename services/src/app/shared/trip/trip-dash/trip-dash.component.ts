import { Component, inject, OnInit } from '@angular/core';
import { Itrip } from '../../models/trip';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-trip-dash',
  templateUrl: './trip-dash.component.html',
  styleUrls: ['./trip-dash.component.scss']
})
export class TripDashComponent implements OnInit {

  tripArr!:Array<Itrip>
  private tripService =inject(TripService)
  constructor() { }

  ngOnInit(): void {

  this.tripArr=this.tripService.fetchAll()
    
  }

}
