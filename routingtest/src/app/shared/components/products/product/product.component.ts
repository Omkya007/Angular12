import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  prodInfo!:Iproduct
  prodId!:string
  private prod =inject(ProductService)
  private _route =inject(ActivatedRoute)
  private _router =inject(Router)
  constructor() { }

  ngOnInit(): void {

    this.prodId =this._route.snapshot.params['pid']
    this.prodInfo = this.prod.fetchProd(this.prodId)
  }

  onRemove(){
    this.prod.onRemove(this.prodId)
  }
 

}
