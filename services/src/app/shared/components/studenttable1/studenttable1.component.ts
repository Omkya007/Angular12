import { Component, inject, OnInit } from '@angular/core';
import { Istd } from '../../models/student';
import { Student1Service } from '../../services/student1.service';

@Component({
  selector: 'app-studenttable1',
  templateUrl: './studenttable1.component.html',
  styleUrls: ['./studenttable1.component.scss']
})
export class Studenttable1Component implements OnInit {
 
  StdArr!:Array<Istd>
  private _stdService=inject(Student1Service)
  constructor() { }

  ngOnInit(): void {

    this.StdArr = this._stdService.fetchAll()
  }

  onRem(Id:string){
    this._stdService.onRem(Id)
  }

}
