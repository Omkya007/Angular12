import { Component, Input, OnInit } from '@angular/core';
import { Itododash } from '../../models/todoDash';

@Component({
  selector: 'app-todo-dash',
  templateUrl: './todo-dash.component.html',
  styleUrls: ['./todo-dash.component.scss']
})
export class TodoDashComponent implements OnInit {
  todoArr:Array<Itododash>=[
    {
      todoItem:'JS',
      todoRating:4
    },
    {
      todoItem:'TS',
      todoRating:3
    },
    {
      todoItem:'EXP',
      todoRating:2
    }


  ]
  constructor() { }

  ngOnInit(): void {
  }
  getTodo(todo:Itododash){
    console.log(todo);
    this.todoArr.push(todo)
  }
}
