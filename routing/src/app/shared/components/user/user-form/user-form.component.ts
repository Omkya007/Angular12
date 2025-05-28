import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/shared/models/user';
import { UserServiceService } from 'src/app/shared/services/user-service.service';
import { UuidServiceService } from 'src/app/shared/services/uuid-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
   userId!:string
   userInfo!:Iuser
   userForm!:FormGroup
   isInEdit:boolean=false
   updateBtn:boolean=false
  constructor(
    private _route:ActivatedRoute,
    private _userService:UserServiceService,
    private _uuidService:UuidServiceService
  ) { }

  ngOnInit(): void {


    this.userForm =new FormGroup({
      Username:new FormControl(null,[Validators.required]),
      UserRole:new FormControl("Admin",[Validators.required])

    })

    // to get the id from params
    this.userId =this._route.snapshot.params['userId']
   
    // to get the id patch it in form
    if(this.userId){
      this.isInEdit =true
      this.userInfo =this._userService.fetchUser(this.userId)
      this.userForm.patchValue(this.userInfo)
    }

    // to check whether the role is admin or candidate
    this._route.queryParams
    .subscribe((params:Params)=>{
      console.log(params);
    
      if(params['userRole'].toLowerCase().includes('candidate')){
        this.userForm.disable()
        this.updateBtn =true
      }else{
        this.userForm.enable()
        this.updateBtn =false
      }
      
    })
  }

  // to add the object  when submitting the form
  onAdd(){
   if(this.userForm.valid){
    console.log(this.userForm.value);

    let userObj:Iuser={
     ... this.userForm.value,
     userId:this._uuidService.generateUuid()
    }
    this.userForm.reset()
    this._userService.postUser(userObj)

    
   }
    
  }

  //to update the form
  onUpdate(){
    let updatedObj :Iuser ={...this.userForm.value,UserId:this.userId}
    this.userForm.reset()
    this._userService.updateUser(updatedObj)
  }



}
