import { Component, OnInit } from '@angular/core';
import { mobileProducts1 } from '../../models/mobile1';

@Component({
  selector: 'app-mobile1',
  templateUrl: './mobile1.component.html',
  styleUrls: ['./mobile1.component.scss']
})
export class Mobile1Component implements OnInit {
  mobilePro =mobileProducts1;
  constructor() { }

  ngOnInit(): void {
  }

}
