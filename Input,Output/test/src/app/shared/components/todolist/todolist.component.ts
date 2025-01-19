import { Component, Input, OnInit } from '@angular/core';
import { Itododash } from '../../models/todoDash';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
 @Input() todoData!:Array<Itododash>
  constructor() { }

  ngOnInit(): void {
  }

}
