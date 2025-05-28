import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct, PoroductsStatus } from '../../models/product';
import { UuidService } from '../../services/uuid.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {


  @ViewChild('productForm') productForm!:NgForm

  private productService = inject(ProductService)
  private Uuid =inject(UuidService)
  constructor() { }

  ngOnInit(): void {
  }
  
  onAdd(){
  
      let prodObj :Iproduct={...this.productForm.value , pId:this.Uuid.generateUuid(), pStatus:PoroductsStatus.InProgress }
      console.log((prodObj));
      
      this.productService.createNewProd(prodObj)
      
    
  }

}
