import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  selectedFarme:string='React';
  constructor() { }

  ngOnInit(): void {
  }

  // onTab(val:string){
  //   this.selectedFarme=val;
  // }

}
