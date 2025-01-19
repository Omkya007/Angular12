import { Component, Input, OnInit } from '@angular/core';
import { Imobile } from '../../models/mobile';

@Component({
  selector: 'app-mob1',
  templateUrl: './mob1.component.html',
  styleUrls: ['./mob1.component.scss']
})
export class Mob1Component implements OnInit {
 @Input() mobs!:Imobile
  constructor() { }

  ngOnInit(): void {
  }

}
