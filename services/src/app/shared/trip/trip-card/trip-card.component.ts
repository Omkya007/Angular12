import { Component, inject, Input, OnInit } from '@angular/core';
import { Itrip } from '../../models/trip';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent implements OnInit {


  @Input() tripObj!:Itrip
  isEdit:boolean=false;
  private tripService = inject(TripService)
  constructor() { }

  ngOnInit(): void {
  }

  Update(updated:string){
    this.isEdit =!this.isEdit
   this.tripService.UpdatedTrip({...this.tripObj,fullname:updated})
    
  }

  onRemove(Id:number){
    this.tripService.onRemove(Id)
  }

}
