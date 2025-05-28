import { Injectable } from '@angular/core';
import { Iproduct } from '../models/product';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';

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

  constructor(
    private _route:Router,
    private _snack:SnackBarService
  ) { }

  fetchAllProd(){
    return this.productsArr
  }

  fetchProduct(id:string):Iproduct{
    
    return this.productsArr.find(prod=> prod.pid===id)!
    
    
}

postPorduct(postObj:Iproduct){
  //api call to post data in db

  this.productsArr.push(postObj)
  this._route.navigate(['products'])
  this._snack.openSnackBar(`The product has been successfully added`)
}

 updated(updated:Iproduct){
  let getIndex =this.productsArr.findIndex(prod=> prod.pid ===updated.pid)
  this.productsArr[getIndex]=updated
  this._route.navigate(['products',updated.pid],{
    queryParams:{canReturn:updated.canReturn}
  })
  this._snack.openSnackBar(`The product is successfully updated`)
 }

 onRemove(id:string){
  let getIndex =this.productsArr.findIndex(prod=> prod.pid === id)
  this.productsArr.splice(getIndex,1)
  this._snack.openSnackBar(`The product is removed successfully`)
    this._route.navigate(['products'])

 }
}