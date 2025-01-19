import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd1 } from '../../models/std copy';

@Component({
  selector: 'app-std2',
  templateUrl: './std2.component.html',
  styleUrls: ['./std2.component.scss']
})
export class Std2Component implements OnInit {

  @ViewChild('fname') fnameCon!:ElementRef;
  @ViewChild('lname') lnameCon!:ElementRef;
  @ViewChild('email') emailCon!:ElementRef;
  @ViewChild('contact') contactCon!:ElementRef;
  stdA:Array<Istd1>=[
    {
      fname:"Om",
      lname:"khot",
      email:"om@gmail.com",
      contact:3393933
    },
    {
      fname:"Om",
      lname:"khot",
      email:"om@gmail.com",
      contact:3393933
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onstd(){
    let newS:Istd1={

      fname:this.fnameCon.nativeElement.value,
      lname:this.lnameCon.nativeElement.value,
      email:this.emailCon.nativeElement.value,
      contact:this.contactCon.nativeElement.value

    }
    this.stdA.unshift(newS);
    this.fnameCon.nativeElement.value='';
    this.lnameCon.nativeElement.value='';
    this.emailCon.nativeElement.value='';
    this.contactCon.nativeElement.value='';


  }
}
