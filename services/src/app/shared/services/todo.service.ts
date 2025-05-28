import { inject, Injectable } from '@angular/core';
import { Itodo } from '../models/todo';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Array<Itodo>=[
    {
      todoItem:'Angular 18',
      todoId:"1234"
    },{
      todoItem:'Node 18',
      todoId:"1235"
    }
  ]
  private _snackBarService =inject(SnackBarService)
  constructor() { }

  fetchAllTodos(){
    //Api call to fetch all items

    return this.todos
  }

  addnewTodo(todo:Itodo){
    //api call to add new todo

    this.todos.push(todo)
    // new todo added sucessfully !!!
    this._snackBarService.openSnackBar(`Added New Todo ${todo.todoItem} Successfully`)

  }

  removeTodo(id:string){
    //Api call to remove todo from db
    let getIndex = this.todos.findIndex(todo=> todo.todoId === id)
    let removeObj = this.todos[getIndex]
    this.todos.splice(getIndex,1)
    this._snackBarService.openSnackBar(`TodoItem ${removeObj.todoId} removed Successfully!`)
  }
  
}

