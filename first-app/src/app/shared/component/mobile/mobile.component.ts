import { Component, OnInit } from '@angular/core';
import { mobileProducts } from '../../models/mobile';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
mobileProd =mobileProducts;
  constructor() { }

  ngOnInit(): void {
    console.log(mobileProducts);
  }

}
