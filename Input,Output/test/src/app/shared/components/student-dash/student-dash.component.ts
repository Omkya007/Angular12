import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.scss']
})
export class StudentDashComponent implements OnInit {
 stdArr:Array<Istd>=[{
  fname:"John",
  lname:"Doe",
  email:"doe@gmail.com",
  conatct:329329323,
  isActive:"in-Active"
 },
 {
  fname:"May",
  lname:"Doe",
  email:"may@gmail.com",
  conatct:454504809,
  isActive:"Active"
 },
 {
  fname:"Evan",
  lname:"Doe",
  email:"evan@gmail.com",
  conatct:323353666,
  isActive:"Active"
 }
]
  constructor() { }

  ngOnInit(): void {
  }
  
  onGet(eve:Istd){
    this.stdArr.push(eve)
  }
}
