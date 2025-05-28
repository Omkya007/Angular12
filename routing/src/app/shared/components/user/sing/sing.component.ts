import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/user';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-sing',
  templateUrl: './sing.component.html',
  styleUrls: ['./sing.component.scss']
})
export class SingComponent implements OnInit {
  userId!:string
  userInfo!:Iuser
  
  constructor(
    private _routes:ActivatedRoute,
    private _userService:UserServiceService,
    private _route:Router
  ) { }

  ngOnInit(): void {

   

    this._routes.params
                .subscribe((params:Params)=>{
                  console.log(params);
                  this.userId=params['userId'];
                  this.userInfo =this._userService.fetchUser(this.userId)
                  
                })



                
                
    //we will get userid from current url params
    // console.log(this._routes.snapshot.params['userId']);

    // this.userId =this._routes.snapshot.params['userId'];
    // this.userInfo =this._userService.fetchUser(this.userId)
    
    
  }
  onRemove(){
    this._userService.removeUser(this.userId)
  }

  gotoEdit(){
    this._route.navigate(['edit'],{
      relativeTo:this._routes,
      queryParamsHandling:"preserve"
    })
  }

}
