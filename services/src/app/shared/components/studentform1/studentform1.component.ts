import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Istd } from '../../models/student';
import { NgForm } from '@angular/forms';
import { Student1Service } from '../../services/student1.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-studentform1',
  templateUrl: './studentform1.component.html',
  styleUrls: ['./studentform1.component.scss']
})
export class Studentform1Component implements OnInit {
 
  stdArr!:Array<Istd>
  @ViewChild('stForm')
  stForm!: NgForm;

  private _stdService = inject(Student1Service)
  private _uuid = inject(UuidService)
  constructor() { }

  ngOnInit(): void {
 
    
  }

  onForm(){
    let stdObj= {...this.stForm.value,Id:this._uuid.generateUuid()}
    this._stdService.onAdd(stdObj)
  }


}
