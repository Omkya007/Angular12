import { Component, inject, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  prodInfo!:Array<Iproduct>

  private prod =inject(ProductService)
  constructor() { }

  ngOnInit(): void {
    this.prodInfo = this.prod.fetchAll()
  }

}
