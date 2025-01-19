import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
@Input() getMsg!:string;
 msgFromChild:string="Yes I Will Defenitely"
@Output() sendMSg:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.sendMSg.emit(this.msgFromChild)
    
  }

}
