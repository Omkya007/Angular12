import { Component, Input, OnInit } from '@angular/core';
import { Imobile } from '../../models/mobile';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss']
})
export class MobileCardComponent implements OnInit {
@Input() mobileD!:Imobile
  constructor() { }

  ngOnInit(): void {
    
  }

}
