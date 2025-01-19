import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itododash } from '../../models/todoDash';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {

  constructor() { }
  @Output() todoEmitter:EventEmitter<Itododash> =new EventEmitter();
  ngOnInit(): void {
  }

  onTodo(todoItem:NgForm){
    if(todoItem.valid){
      console.log(todoItem.value)
      let todoObj ={...todoItem.value,todoRating:+todoItem.controls['todoRating'].value}
      console.log(todoObj);
      todoItem.reset()
      this.todoEmitter.emit(todoObj)
    }

  }
}
