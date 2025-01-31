import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  title = 'tdForm';

  userNameMax:boolean=false

  @ViewChild('signUp') signUp !:NgForm

  User={
    "userDetails": {
        "userName": "OmkarKhot",
        "email": "omkhot0000@gmail.com"
    },
    "secretQ": "favbike",
    "answer": "football",
    "Subs": true,
    "mode": "Phone"
}

  contactMode=[
    {moc:'Phone',id:1},
    {moc:'Email',id:2},
    {moc:'FAX',id:3}

  ]

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(this.signUp?.controls['userName']);
    //   this.signUp?.controls['userName'].valueChanges
    //        .subscribe(data=>{
    //          console.log(data);
    //          if(data.length>=12){
    //           this.userNameMax=true
    //          }else{
    //           this.userNameMax=false
    //          }

             
    //        })
      
    // }, 500);
  }
  

  onSignIn(){
    console.log(this.signUp);
    console.log(this.signUp.value);
    
    
   
    
  }
  
  onPatch(){
    this.signUp.form.patchValue(this.User)
  }

  // onUserName(eve:Event){
  //   let vallength=(eve.target as HTMLInputElement ).value.length
  //   if(vallength >=12){
  //     this.userNameMax=true
  //   }
  // }
}
