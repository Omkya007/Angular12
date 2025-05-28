import { Injectable } from '@angular/core';
import { Ipassenger } from '../models/passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {


   passengers:Array<Ipassenger> = [
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

  fetchAllData()
  {
    //api call to fetch pass data from db 

    return this.passengers
  }

  updatePassenger(updated:Ipassenger){
    let getIndex = this.passengers.findIndex(pass=>{
      return pass.id===updated.id

    })
    this.passengers[getIndex]=updated
    console.log(this.passengers);
    
    
  }

  removePass(id:number){
    //Api call to remove passenger from db

    let getIndex =this.passengers.findIndex(pass=> pass.id === id)
    console.log(getIndex);

    this.passengers.splice(getIndex,1)
    



  }
}
