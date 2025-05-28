import { Component, inject, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  productsArr !:Array<Iproduct>
  private _product =inject(ProductService)
  constructor() { }

  ngOnInit(): void {

    this.productsArr = this._product.fetchAllProducts()
  }

}
