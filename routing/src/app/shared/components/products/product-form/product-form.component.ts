import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { UuidServiceService } from 'src/app/shared/services/uuid-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  prodId!:string
  product!:Iproduct
  prodForm!:FormGroup
  isEdit:boolean=false
  update:boolean =false
  constructor(
    private _route:ActivatedRoute,
    private _prodService:ProductService,
    private _uuid:UuidServiceService
  ) { }

  ngOnInit(): void {

    this.prodForm =new FormGroup({
      pname:new FormControl(null,Validators.required),
      pstatus:new FormControl(null,Validators.required),
      canReturn:new FormControl(null,Validators.required),

      
    })

    this.prodId =this._route.snapshot.params['productId']

    if(this.prodId){
      this.isEdit =true
      this.product =this._prodService.fetchProduct(this.prodId)
      this.prodForm.patchValue({...this.product,canReturn:this.product.canReturn ?"Yes":"No"})
      
    }

    this._route.queryParams
      .subscribe((params:Params)=>{
        console.log(params);

        if(params['canReturn']==='0'){
          this.prodForm.disable()
          this.update =true
        }else{
          this.update=false
        }
        
      })
  }
  onProd(){
    
    if(this.prodForm.valid){
      let returnVal =this.prodForm.controls['canReturn'].value === 'Yes'?1:0;
      console.log({...this.prodForm.value,canReturn:returnVal});

      let product:Iproduct={
        ... this.prodForm.value,canReturn:returnVal,
        pid:this._uuid.generateUuid()
      }
      this._prodService.postPorduct(product)
    }
    
  }

  onUpdate(){
    // give us the updated product obj

    if(this.prodForm.valid){

      let updatedObj:Iproduct ={
        ...this.prodForm.value,pid:this.prodId,
        canReturn:this.prodForm.controls[`canReturn`].value=== 'Yes'?1:0
      }
      this.prodForm.reset()
      this._prodService.updated(updatedObj)

    }

  }

}
