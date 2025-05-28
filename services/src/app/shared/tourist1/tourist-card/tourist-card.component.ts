import { Component, inject, Input, OnInit } from '@angular/core';
import { Itourist } from '../../models/tourist';
import { TouristService } from '../../services/tourist.service';

@Component({
  selector: 'app-tourist-card',
  templateUrl: './tourist-card.component.html',
  styleUrls: ['./tourist-card.component.scss']
})
export class TouristCardComponent implements OnInit {
    
  @Input() toursObj!:Itourist
  private tourService =inject(TouristService)
  isEdit:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  updateTour(updateName:string){

    this.tourService.UpdateTour({...this.toursObj,fullname:updateName})
  }
  onRemove(Id:number){
    this.tourService.onRemove(Id)

  }

}
