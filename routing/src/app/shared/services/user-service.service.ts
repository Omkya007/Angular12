import { Injectable } from '@angular/core';
import { Iuser } from '../models/user';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  userArr:Array<Iuser>=[
    {
      Username:"Om",
      UserId:"1",
      UserRole:"Candidate"
    },
    {
      Username:"Som",
      UserId:"2",
      UserRole:"Admin"
    },
    {
      Username:"May",
      UserId:"3",
      UserRole:"Candidate"
    }
  ]
  constructor(
    private _router:Router,
    private _snackBar:SnackBarService
  ) { }

  fetchAllUser():Array<Iuser>{
    //api call to fetch all users
    
    return this.userArr

  }

  fetchUser(id:string):Iuser{
    //api call to fetch user data
    return this.userArr.find(user=> user.UserId ===id)!
  }

  postUser(user:Iuser){
    //api call to add new user
    this.userArr.push(user)
    this._router.navigate(['user'])

    this._snackBar.openSnackBar(`New User Added Successfully`);

  }

  updateUser(updatedUser:Iuser){
    //Api call to update user
    let getIndex = this.userArr.findIndex(user=> user.UserId === updatedUser.UserId)
    this.userArr[getIndex] =updatedUser;
    this._router.navigate(['user',updatedUser.UserId],{
      queryParams:{userRole:updatedUser.UserRole}
    }
    )
    this._snackBar.openSnackBar(`The user has been updated Successfully`)

  }

  removeUser(id:string){
    //api call to remove user
    let getIndex = this.userArr.findIndex(user=> user.UserId ===id)
    this.userArr.splice(getIndex,1)
    this._snackBar.openSnackBar(`The user is removed successfully`)
    this._router.navigate(['user'])

  }
}
