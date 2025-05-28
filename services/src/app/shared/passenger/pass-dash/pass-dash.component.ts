import { Component, inject, OnInit } from '@angular/core';
import { Ipassenger } from '../../models/passenger';
import { PassengerService } from '../../services/passenger.service';

@Component({
  selector: 'app-pass-dash',
  templateUrl: './pass-dash.component.html',
  styleUrls: ['./pass-dash.component.scss']
})
export class PassDashComponent implements OnInit {


  passArr!:Array<Ipassenger>
  checkIn!:number

  private passService=  inject(PassengerService)
  constructor() { }

  ngOnInit(): void {

    this.passArr = this.passService.fetchAllData()

  }

  getcheckIn(){
   this.checkIn= this.passArr.filter(pass=>{
      return pass.checkinstatus
    }).length
  }


}
