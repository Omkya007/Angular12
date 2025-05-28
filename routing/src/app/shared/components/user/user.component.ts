import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { Iuser } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    userInfo!:Array<Iuser>
    selected!: string;
  constructor(
    private _route:Router,
    private _userService:UserServiceService,
    private _router:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.userInfo =this._userService.fetchAllUser()
    this.selected =this.userInfo[0].UserId
    this._route.navigate([this.userInfo[0].UserId],{
      relativeTo:this._router
    })
  }

  onPro(){
    this._route.navigate(['products'])
  }

  onUser(user:Iuser){
    console.log(user);
    this.selected =user.UserId
    
  }

}
