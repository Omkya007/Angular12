import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-std-d',
  templateUrl: './std-d.component.html',
  styleUrls: ['./std-d.component.scss']
})
export class StdDComponent implements OnInit {
 stdArr:Array<Istd>=[{
  fname:"om",
  lname:"khot",
  conatct:123455,
  email:"omkhot1234@gmail.com",
  isActive:"Active"
 },
 {
  fname:"Sam",
  lname:"khot",
  conatct:123455,
  email:"Samkhot1234@gmail.com",
  isActive:"in-Active"
 },
 {
  fname:"Som",
  lname:"khot",
  conatct:123455,
  email:"somkhot1234@gmail.com",
  isActive:"Active"
 }

]
  constructor() { }

  ngOnInit(): void {
  }

  onGet(std:Istd){
    this.stdArr.push(std)
  }

}
