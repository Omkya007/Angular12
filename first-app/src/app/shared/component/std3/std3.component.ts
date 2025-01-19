import { Component, OnInit } from '@angular/core';
import { Istd3 } from '../../models/std copy 2';

@Component({
  selector: 'app-std3',
  templateUrl: './std3.component.html',
  styleUrls: ['./std3.component.scss']
})
export class Std3Component implements OnInit {

  stdArr:Array<Istd3> =[
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

  onStd1(fname:HTMLInputElement,lname:HTMLInputElement,email:HTMLInputElement,contact:HTMLInputElement){
    let news:Istd3 ={
      fname:fname.value,
      lname:lname.value,
      email:email.value,
      contact:+contact.value
    }
    this.stdArr.unshift(news)
    fname.value='';
    lname.value='';
    email.value='';
    contact.value='';

  }
}
