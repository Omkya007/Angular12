import { Component, inject, OnInit } from '@angular/core';
import { Itourist } from '../../models/tourist';
import { TouristService } from '../../services/tourist.service';

@Component({
  selector: 'app-tourist-dash',
  templateUrl: './tourist-dash.component.html',
  styleUrls: ['./tourist-dash.component.scss']
})
export class TouristDashComponent implements OnInit {

  tourArr!:Array<Itourist>
  private tourService =inject(TouristService)
  constructor() { }

  ngOnInit(): void {

    this.tourArr = this.tourService.fetchAllTourist()
  }

}
