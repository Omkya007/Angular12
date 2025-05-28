import { Component, inject, OnInit } from '@angular/core';
import { Iuser } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  

  userInfo!:Array<Iuser>
  selected!:string

  private route =inject(Router)
  private active=inject(ActivatedRoute)

  private userService =inject(UsersService)
  constructor() { }

  ngOnInit(): void {
    this.userInfo =this.userService.fetchAlluser()
    this.selected =this.userInfo[0].userid
    this.route.navigate([this.userInfo[0].userid],{
      relativeTo:this.active
    })
    

  }

  onUser(user:Iuser){
    this.selected =user.userid
  }

}
