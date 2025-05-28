import { inject, Injectable } from '@angular/core';
import { Istd } from '../models/student';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
   private _snack =inject(SnackBarService)
  stdArr:Array<Istd> =[
    {
      fname:"Om",
      lname:"Khot",
      email:"omkhot0000@gmail.com",
      contact:1234564554,
      id:"123"
    },
    {
      fname:"Som",
      lname:"Patil",
      email:"Somkhot2000@gmail.com",
      contact:123445455,
      id:"124"
      
    },
    {
      fname:"Sam",
      lname:"Khot",
      email:"Samkhot0000@gmail.com",
      contact:45642453465,
      id:"125"
    }
  ]
  constructor() { }


  fetchAll(){
    //Api call to fetch all std data 
    return this.stdArr
  }

  addNew(std:Istd){
    //api call to create new std in db

    this.stdArr.push(std)
    this._snack.openSnackBar(`The New Student with Name ${std.fname} is added successfully`)
  }

  removeLast(Id:string){
    //api call to remove std 
    let getIndex  =this.stdArr.findIndex(std=> std.id === Id)
    this.stdArr.splice(getIndex,1)
    let RemStd= this.stdArr[getIndex];

    this._snack.openSnackBar(`Student with ${RemStd.fname} is removed `)
  }
}
