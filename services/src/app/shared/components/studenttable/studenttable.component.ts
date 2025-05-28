import { Component, inject, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Istd } from '../../models/student';

@Component({
  selector: 'app-studenttable',
  templateUrl: './studenttable.component.html',
  styleUrls: ['./studenttable.component.scss']
})
export class StudenttableComponent implements OnInit {
 
  stdArr!:Array<Istd>
  private _stdService=inject(StudentService)
  constructor() { }

  ngOnInit(): void {
    this.stdArr = this._stdService.fetchAll()
  }

  onRem(Id:string){
    this._stdService.removeLast(Id)
  }

}
