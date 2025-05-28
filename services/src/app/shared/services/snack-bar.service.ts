import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  private _snackBar=inject(MatSnackBar)
  constructor() { }

  openSnackBar(msg:string){
    this._snackBar.open(msg,`close`,{
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:2400
    })
  }
}
