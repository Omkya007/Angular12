import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'services';

  

  constructor(
    private _http:HttpClient
  ){

  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    
  ]
})
export class TouristModule {
}
