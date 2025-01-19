import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.scss']
})
export class StudentformComponent implements OnInit {
@Output() stdEmitter :EventEmitter<Istd>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onStdAdd(stdform:NgForm){
    if(stdform.valid){
      console.log(stdform.value);
      this.stdEmitter.emit(stdform.value)
      stdform.reset()
    }
  }
}
