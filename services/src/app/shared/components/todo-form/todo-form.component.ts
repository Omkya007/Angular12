import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm') todoForm!:NgForm
  constructor(
    private _todoService:TodoService,
    private _todoUUid:UuidService
  ) { }

  ngOnInit(): void {
  }
  onTodo(){
    if(this.todoForm.valid){
      let todoObj:Itodo= {...this.todoForm.value,todoId:this._todoUUid.generateUuid()};
      
      console.log(todoObj);
      this._todoService.addnewTodo(todoObj)
      this.todoForm.reset()
      
    
  }

}
}
