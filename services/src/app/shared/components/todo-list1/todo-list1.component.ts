import { Component, inject, OnInit } from '@angular/core';
import { Itada } from '../../models/tada';
import { TodoSService } from '../../services/todo-s.service';

@Component({
  selector: 'app-todo-list1',
  templateUrl: './todo-list1.component.html',
  styleUrls: ['./todo-list1.component.scss']
})
export class TodoList1Component implements OnInit {
  todoArr!:Array<Itada>

  private todoService =inject(TodoSService)
  constructor() { }

  ngOnInit(): void {
    this.todoArr = this.todoService.fetchAll()
  }

  onRem(Id:string){
    this.todoService.onRemove(Id)
  }


}
