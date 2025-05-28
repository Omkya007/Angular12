import { Injectable } from '@angular/core';
import { Itourist } from '../models/tourist';

@Injectable({
  providedIn: 'root'
})
export class TouristService {
  
  tourist:Array<Itourist> = [
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


  fetchAllTourist(){
    return this.tourist
  }

  UpdateTour(updated:Itourist){
   
    let getIndex=this.tourist.findIndex(pass=>{
      return pass.id === updated.id
    })
    this.tourist[getIndex]=updated
  }

  onRemove(Id:number){
    let getIndex =this.tourist.findIndex(pass=> pass.id ===Id)
    this.tourist.splice(getIndex,1)
  }
}
