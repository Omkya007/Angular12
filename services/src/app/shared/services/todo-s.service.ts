import { inject, Injectable } from '@angular/core';
import { SnackBarService } from './snack-bar.service';
import { MaterialModule } from '../material/material.module';
import { Itada } from '../models/tada';

@Injectable({
  providedIn: 'root'
})
export class TodoSService {

  private _snack =inject(SnackBarService)
  private _mat = inject(MaterialModule)
  constructor() { }


  tada :Array<Itada>=[
    {
      tadaItem:"Angular",
      tadaId:"123"
    },
    {
      tadaItem:"React",
      tadaId:"134"
    }
  ]

  fetchAll(){
    return this.tada
  }

  addNew(item:Itada){

    this.tada.push(item)
    this._snack.openSnackBar("Item Add Success")

  }

  onRemove(Id:string){
    let getIndex = this.tada.findIndex(todo=> todo.tadaId === Id)
    console.log(getIndex);
    this.tada.splice(getIndex,1)
    this._snack.openSnackBar("Item Deleted Successfully")

       
  }
}
