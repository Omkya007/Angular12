import { inject, Injectable } from '@angular/core';
import { Istd } from '../models/student';
import { MaterialModule } from '../material/material.module';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class Student1Service {
  
  private _Material =inject(MaterialModule)
  private _snack = inject(SnackBarService)
  std:Array<Istd>=[
    {
      fname:"om",
      lname:"khot",
      email:"omkhot0000@gmail.com",
      contact:2324442444,
      id:"123"
    },
    {
      fname:"Sam",
      lname:"Iyer",
      email:"omkhot0000@gmail.com",
      contact:45532322,
      id:"1234"
    },
    {
      fname:"Som",
      lname:"khot",
      email:"omkhot0000@gmail.com",
      contact:2324442444,
      id:"1235"
    }
  ]


  constructor() { }

  fetchAll(){
    return this.std
  }

  onAdd(item:Istd){
    this.std.push(item)
    this._snack.openSnackBar("The Item Added Successfully")
    
  }

  onRem(Id:string){
    let stds=this.std.findIndex(todo=> todo.id ===Id)
  this.std.splice(stds,1)
  let remObj=this.std[stds]
  this._snack.openSnackBar(`The Student with ${remObj.fname} has been deleted successfully`)
    
  }


}
