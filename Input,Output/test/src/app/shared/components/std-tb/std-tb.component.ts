import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../models/std';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-std-tb',
  templateUrl: './std-tb.component.html',
  styleUrls: ['./std-tb.component.scss']
})
export class StdTbComponent implements OnInit {
 @Input() stdData!:Array<Istd>
  constructor() { }

  ngOnInit(): void {
  }
  

}
