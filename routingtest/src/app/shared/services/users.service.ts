import { Injectable } from '@angular/core';
import { Iuser } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersArr:Array<Iuser>= [
    { userid: '1', userrole: 'admin', username: 'john_doe' },
    { userid: '2', userrole: 'editor', username: 'jane_smith' },
    { userid: '3', userrole: 'admin', username: 'sam_jones' },
    { userid: '4', userrole: 'admin', username: 'lisa_white' },
    { userid: '5', userrole: 'editor', username: 'michael_brown' }
  ];
  constructor(
    private _route:Router
  ) { }

  fetchAlluser(){
    return this.usersArr
  }

  fetchUser(id:string){
     return this.usersArr.find(use => use.userid ===id)!
   
  }

  Post(user:Iuser){
    this.usersArr.push(user);
    this._route.navigate(['users'])
    

  }

  onUpdate(updatedUser:Iuser){
    let getIndex= this.usersArr.findIndex(user=> user.userid === updatedUser.userid)
    this.usersArr[getIndex]=updatedUser
    this._route.navigate(['users'])

  }

  onRemove(id:string){
    let getIndex =this.usersArr.findIndex(user=> user.userid ===id)
    this.usersArr.splice(getIndex,1)
    this._route.navigate(['users'])

  }
}
