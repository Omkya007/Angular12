import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoArr:Array<string> =["HTML","CSS","JS"]
  @ViewChild('todo')todo!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    let val=(this.todo.nativeElement.value);
    this.todoArr.push(val);
  }

}
