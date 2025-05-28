import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../../models/passenger';
import { PassengerService } from '../../services/passenger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {


  @Input() passObj!:Ipassenger
  isInEdit:boolean =false
  private passService =inject(PassengerService)
  constructor() { }

  ngOnInit(): void {
  }

  updateUser(updateName:string){
    this.isInEdit=!this.isInEdit
    
    console.log( {...this.passObj,fullname:updateName});
    

    this.passService.updatePassenger({...this.passObj,fullname:updateName})
  }

  onRemove(Id:number){
    this.passService.removePass(Id);
    
     
  }

}
