import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoSService } from '../../services/todo-s.service';
import { Itada } from '../../models/tada';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-todo-form1',
  templateUrl: './todo-form1.component.html',
  styleUrls: ['./todo-form1.component.scss']
})
export class TodoForm1Component implements OnInit {
 @ViewChild('onForm')onForm!:NgForm
  constructor() { }
  private _todos = inject(TodoSService)
  private _uuid =inject(UuidService)
  ngOnInit(): void {
  }

  onTodo(){
    let Obj:Itada ={...this.onForm.value,tadaId:this._uuid.generateUuid()}
    console.log(Obj);
    
    this._todos.addNew(Obj)
    this.onForm.reset()
    
  }
}
