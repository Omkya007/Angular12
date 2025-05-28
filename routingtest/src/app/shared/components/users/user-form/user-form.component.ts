import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userInfo!:Iuser
  userId!:string
  userForm!:FormGroup
  isEdit:boolean =false
  updateBtn:boolean =false
  private _route=inject(ActivatedRoute)
  private _userService =inject(UsersService)
  private _uuid =inject(UuidService)
  constructor() { }

  ngOnInit(): void {

    this.userForm =new FormGroup({
      username:new FormControl(null,[Validators.required]),
      userrole:new FormControl("admin", [Validators.required])
    })

    this.userId =this._route.snapshot.params['userid']

    if(this.userId){
      this.isEdit =true
      this.userInfo =this._userService.fetchUser(this.userId)
      this.userForm.patchValue(this.userInfo)
      console.log(this.userInfo);
      
    }
    
    this._route.queryParams
                  .subscribe((params:Params)=>{
                    console.log(params);
                    

                    if(params['userRole'].toLowerCase().includes('editor')){
                      this.userForm.disable()
                      this.updateBtn =true
                    }else{
                      this.userForm.enable()
                      this.updateBtn=false
                    }
                  })

    
  }


 

  

  
 
  onAdd(){
    if(this.userForm.valid){

      let userObj:Iuser={
       ... this.userForm.value,
       userid:this._uuid.generateUuid()
      }
      this.userForm.reset()
      this._userService.Post(userObj)
    }
  }
  

  onUpdate(){
    let updatedObj:Iuser ={
      ...this.userForm.value,userid:this.userId
      
    }
    this.userForm.reset()
    this._userService.onUpdate(updatedObj)
  }

  


}
