import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-studenttab',
  templateUrl: './studenttab.component.html',
  styleUrls: ['./studenttab.component.scss']
})
export class StudenttabComponent implements OnInit {
 @Input() stdData!:Array<Istd>
  constructor() { }

  ngOnInit(): void {
  }

}
