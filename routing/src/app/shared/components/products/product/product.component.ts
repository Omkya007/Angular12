import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  prodId!:string
  product!:Iproduct
  constructor(
    private _prodService:ProductService,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    // console.log(this._route.snapshot.params['productId']);
    // this.prodId =this._route.snapshot.params['productId'];

    this._route.params
              .subscribe((params:Params)=>{
                console.log(params);
                this.prodId=params['productId']
                if(this.prodId){
                  this.product =this._prodService.fetchProduct(this.prodId)
                }
              })



   
    
  }
  onRemove(){
    this._prodService.onRemove(this.prodId)
  }

}
