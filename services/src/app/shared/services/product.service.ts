import { inject, Injectable } from '@angular/core';
import { Iproduct, PoroductsStatus } from '../models/product';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private _snack =inject(SnackBarService)
  productsArr:Array<Iproduct>=[
    {
      pName:"Samasung",
      pDetails:`sbhsacbsamnasmnsanmbsnm`,
      pId:"123",
      pStatus:PoroductsStatus.InProgress

    },
    {
      pName:"Sony",
      pDetails:`sbhsacbsamnasmnsanmbsnm`,
      pId:"124",
      pStatus:PoroductsStatus.Dispatched

    },
    {
      pName:"Vivo",
      pDetails:`sbhsacbsamnasmnsanmbsnm`,
      pId:"125",
      pStatus:PoroductsStatus.Delivered

    }
  ]
  // constructor() { }

  fetchAllProducts():Array<Iproduct>{
    //api call to fetch all products
    return this.productsArr
  }
  
  createNewProd(prodObj:Iproduct){
    //APi call to add new Product in DB
    this.productsArr.push(prodObj)
  }

  UpdateStatus(prodObj:Iproduct){
    // api call to update product status
    let getIndex = this.productsArr.findIndex(prod=> prod.pId === prodObj.pId)
    this.productsArr[getIndex] = prodObj;
  }
}

