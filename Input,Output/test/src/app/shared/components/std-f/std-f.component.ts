import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-std-f',
  templateUrl: './std-f.component.html',
  styleUrls: ['./std-f.component.scss'],
})
export class StdFComponent implements OnInit {
  @Output() stdEmitter: EventEmitter<Istd> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onStd(stdform: NgForm) {
    if (stdform.valid) {
      console.log(stdform.value);
      this.stdEmitter.emit(stdform.value)
    }
  }
}
