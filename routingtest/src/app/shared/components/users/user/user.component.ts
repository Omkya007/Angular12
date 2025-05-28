import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  userInfo!:Iuser
  userId!:string
  
  constructor(
    private _routes:ActivatedRoute,
    private _userService:UsersService,
    private _route:Router

  ) { }

  ngOnInit(): void {
    
    this._routes.params
                .subscribe((params)=>{
                  this.userId=params['userid']
                  this.userInfo =this._userService.fetchUser(this.userId)
                })
    
  }


  gotoEdit(){
    this._route.navigate(['edit'],{
      relativeTo:this._routes,
      queryParamsHandling: "preserve"
    })
  }

  onRemove(){
    this._userService.onRemove(this.userId)
  }

}
