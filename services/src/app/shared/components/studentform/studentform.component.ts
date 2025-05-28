import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Istd } from '../../models/student';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.scss'],
  // providers:[StudentService]
})
export class StudentformComponent implements OnInit {
  @ViewChild('stdForm')
  stdForm!: NgForm;
  private _stdService = inject(StudentService)
  private _Uuid =inject(UuidService)
 stdArr!:Array<Istd>
  constructor() { }

  ngOnInit(): void {

    
  }

  onStd(){
    if(this.stdForm.valid){
      let stdObj:Istd={...this.stdForm.value,Id:this._Uuid.generateUuid()}
      console.log(stdObj);
      this._stdService.addNew(stdObj)
      this.stdForm.reset()
      
    }
  }
 

}
