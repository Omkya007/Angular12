import { Component, inject, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!:Array<Iproduct>
  private ProdSer =inject(ProductService)
  private _route =inject(ActivatedRoute)
  private _router=inject(Router)
  selected!: string;
  constructor() { }

  ngOnInit(): void {
    this.products =this.ProdSer.fetchAllProd()
    this.selected = this.products[0].pid
    this._router.navigate([this.products[0].pid],{
      relativeTo:this._route
    })

   
  }
  onProduct(product:Iproduct){
    this.selected=product.pid;
  }

}
