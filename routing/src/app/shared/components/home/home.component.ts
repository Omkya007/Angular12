import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }
  OnGo(){

    //api call to get id of product
    console.log('Got product');


    //redirect to product comp

    this._router.navigate(['/products'])


  }

}
