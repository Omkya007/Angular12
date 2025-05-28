import { inject, Injectable } from '@angular/core';
import { Iproduct } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  productsArr:Array<Iproduct>=[
    {
      pname:"Samsung",
      pid:"123",
      pstatus:"In-progress",
      canReturn:1
    },
    {
      pname:"Iphone",
      pid:"124",
      pstatus:"Dispatched",
      canReturn:0
    },
    {
      pname:"onePlus",
      pid:"125",
      pstatus:"Delivered",
      canReturn:1
    }
  ]

  private _route=inject(Router)
  constructor() { }

  fetchAll(){
    return this.productsArr
  }

  fetchProd(id:string):Iproduct{
    return this.productsArr.find(prod=> prod.pid ===id)!
  }

  postObj(prod:Iproduct){
    this.productsArr.push(prod)
    this._route.navigate(['products'])
    
  }

  updateObj(updated:Iproduct){
    let getIndex =this.productsArr.findIndex(prod=> prod.pid === updated.pid)
    this.productsArr[getIndex]=updated
    this._route.navigate(['products'])
  }

  onRemove(id:string){
    let getIndex =this.productsArr.findIndex(prod=> prod.pid ===id)
    this.productsArr.splice(getIndex,1)
    this._route.navigate(['products'])
  }
}
