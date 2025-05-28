import { Component, ElementRef, inject, Input, OnInit } from '@angular/core';
import { Iproduct, PoroductsStatus } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productObj!:Iproduct
  prodStatus = PoroductsStatus
  private ProdService= inject(ProductService)
  constructor() { }

  ngOnInit(): void {
  }

  onStatus(updatedStatus:PoroductsStatus){
    this.productObj.pStatus =updatedStatus
    this.ProdService.UpdateStatus(this.productObj)
    

  }

}
