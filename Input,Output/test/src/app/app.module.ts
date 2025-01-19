import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParComponent } from './shared/components/par/par.component';
import { ChildrenComponent } from './shared/components/children/children.component';
import { OneComponent } from './shared/components/one/one.component';
import { TwoComponent } from './shared/components/two/two.component';
import { FormsModule } from '@angular/forms';
import { TodoDashComponent } from './shared/components/todo-dash/todo-dash.component';
import { TodoformComponent } from './shared/components/todoform/todoform.component';
import { TodolistComponent } from './shared/components/todolist/todolist.component';

import { StudentformComponent } from './shared/components/studentform/studentform.component';
import { StudentDashComponent } from './shared/components/student-dash/student-dash.component';
import { StudenttabComponent } from './shared/components/studenttab/studenttab.component';
import { StdDComponent } from './shared/components/std-d/std-d.component';
import { StdFComponent } from './shared/components/std-f/std-f.component';
import { StdTbComponent } from './shared/components/std-tb/std-tb.component';

@NgModule({
  declarations: [
    AppComponent,
    ParComponent,
    ChildrenComponent,
    OneComponent,
    TwoComponent,
    TodoDashComponent,
    TodoformComponent,
    TodolistComponent,
    
    StudentformComponent,
    StudentDashComponent,
    StudenttabComponent,
    StdDComponent,
    StdFComponent,
    StdTbComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
