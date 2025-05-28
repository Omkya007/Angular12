import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todosArr !:Array<Itodo>;
  constructor(
    private _todoService:TodoService
  ) { }

  ngOnInit(): void {
     this.todosArr = this._todoService.fetchAllTodos()
     


    
  }

  onTodoRemove(Id:string){
    console.log(Id);
    this._todoService.removeTodo(Id);
    
    
  }

}
