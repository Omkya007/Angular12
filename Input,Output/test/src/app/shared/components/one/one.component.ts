import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
 msgFromPar:string ="Work Hard ,Dream Big" ;
 msgForChild!:string


  ngOnInit(): void {

  }

  onGet(msg:any){
    this.msgForChild =msg
  }
 

  
}
