import { Injectable } from '@angular/core';
import { Itourist } from '../models/tourist';
import { Itrip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

   trip :Array<Itrip>= [
        {
          id: 1,
          fullname: 'John Doe',
          checkindate: '2025-02-13',
          checkinstatus:true,
          children: [
            { name: 'Alice Doe' },
            { name: 'Bob Doe' }
          ]
        },
        {
          id: 2,
          fullname: 'Jane Smith',
          checkindate: '2025-02-13',
          checkinstatus: true,
          children: [
            { name: 'Charlie Smith' }
          ]
        },
        {
          id: 3,
          fullname: 'Alice Johnson',
          checkindate: '2025-02-13',
          checkinstatus: true,
          children: []
        },
        {
          id: 4,
          fullname: 'Bob Brown',
          checkindate: '',
          checkinstatus: false,
          children: [
            { name: 'David Brown' },
            { name: 'Eva Brown' },
            { name: 'Frank Brown' }
          ]
        },
        {
          id: 5,
          fullname: 'Charlie Davis',
          checkindate: '',
          checkinstatus: false,
          children: [
            { name: 'Grace Davis' }
          ]
        }
      ];
  constructor() { }


  fetchAll(){
    return this.trip
  }

  UpdatedTrip(updated:Itourist){

    let getIndex =this.trip.findIndex(pass=>{
      return pass.id === updated.id
    })
    this.trip[getIndex]=updated
  }

  onRemove(Id:number){
    let getIndex = this.trip.findIndex(pass=> pass.id === Id)
    this.trip.splice(getIndex,1)
  }
}
