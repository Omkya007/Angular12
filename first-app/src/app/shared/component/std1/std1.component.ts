import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-std1',
  templateUrl: './std1.component.html',
  styleUrls: ['./std1.component.scss']
})
export class Std1Component implements OnInit {

  @ViewChild('fname') fnameCon!:ElementRef;
  @ViewChild('lname') lnameCon!:ElementRef;
  @ViewChild('email') emailCon!:ElementRef;
  @ViewChild('contact') contactCon!:ElementRef;
  
  stdArr:Array<Istd> =[
    {
      fname:"om",
      lname:"khot",
      email:"om@gmail.com",
      contact:70345678,

    },
    {
      fname:"omkar",
      lname:"khot",
      email:"omkar@gmail.com",
      contact:70345678
    },
    {
      fname:"omi",
      lname:"khot",
      email:"omi@gmail.com",
      contact:70345678
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onStd(){
    let newStd:Istd={
      fname:this.fnameCon.nativeElement.value,
      lname:this.lnameCon.nativeElement.value,
      email:this.emailCon.nativeElement.value,
      contact:this.contactCon.nativeElement.value
    }
    console.log(newStd);
    this.stdArr.unshift(newStd);
    this.fnameCon.nativeElement.value ='';
    this.lnameCon.nativeElement.value ='';
    this.emailCon.nativeElement.value ='';
    this.contactCon.nativeElement.value ='';
  }

}
