import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss']
})
export class Product1Component implements OnInit {
 productName:string="Samsung";
 productId:number=123;
 bgColor:string ='Orange';
 isProd!:boolean;

 Mannmae:string ="Om";
 ManId:number =123;
bgColor1:string ="blue";
isMan!:boolean;
isVisible:boolean=true;

  constructor() { }

  ngOnInit(): void {
    this.isProd=Math.random()>.5 ?true:false;
    
  }

  getBg(){
    if(this.isProd){
      return 'blue'
    }else{
      return 'grey';
    }
    
  }

  bgGet(){
    if(this.isMan){
      return 'Pink'
    }
    else{
      return 'dark'
    }
  }

  oni(){
    if(this.isVisible){
      return 
    }
  }
 toggle(){
  this.isVisible =!this.isVisible
 }


}
