import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  prods!:Iproduct
  prodForm!:FormGroup
  prodId!:string
  isEdit:boolean =false
  update:boolean =false
  private prod =inject(ProductService)
  private _router=inject(Router)
  private _route=inject(ActivatedRoute)
  private _uuid=inject(UuidService)
  constructor() { }

  ngOnInit(): void {

    this.prodForm =new FormGroup({
      pname:new FormControl(null,Validators.required),
      pstatus:new FormControl(null,Validators.required),
      canReturn:new FormControl(null,Validators.required)
    })
     this.prodId =this._route.snapshot.params['pid']
     console.log(this.prodId);
     

     if(this.prodId){
      this.isEdit =true
      this.prods =this.prod.fetchProd(this.prodId)
      this.prodForm.patchValue({...this.prods,canReturn:this.prods.canReturn ?"Yes":"No"})
     }

     this._route.queryParams
      .subscribe((params:Params)=>{
        if(params['canReturn']==='0'){
          this.prodForm.disable()
          this.update =true
        }else{
          this.prodForm.enable()
          this.update =false









    
        }
      })

  }

  onAdd(){
    if(this.prodForm.valid){
      let returnVal=this.prodForm.controls['canReturn'].value ==='Yes'?1:0

      let product:Iproduct={
        ...this.prodForm.value,canReturn:returnVal,
        pid:this._uuid.generateUuid()
      }
      this.prod.postObj(product)
    }
  }

  onUpdate(){
    if(this.prodForm.valid){
      let updatedObj:Iproduct={
        ...this.prodForm.value,pid:this.prodId,
        canReturn:this.prodForm.controls['canReturn'].value==='Yes'?1:0

      }
      this.prodForm.reset()
      this.prod.updateObj(updatedObj)
    }

  }

  

}
