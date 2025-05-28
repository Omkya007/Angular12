import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent, TouristModule } from './app.component';

import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { TodoList1Component } from './shared/components/todo-list1/todo-list1.component';
import { TodoForm1Component } from './shared/components/todo-form1/todo-form1.component';
import { StudentformComponent } from './shared/components/studentform/studentform.component';
import { StudenttableComponent } from './shared/components/studenttable/studenttable.component';
import { Studenttable1Component } from './shared/components/studenttable1/studenttable1.component';
import { Studentform1Component } from './shared/components/studentform1/studentform1.component';
import { ProductsModule } from './shared/products/products.module';
import { PassengerModule } from './shared/passenger/passenger.module';
import { Tourist1Module } from './shared/tourist1/tourist1.module';
import { TripModule } from './shared/trip/trip.module';





@NgModule({
  declarations: [
    AppComponent,
    
    TodoFormComponent,
    TodoListComponent,
    TodoList1Component,
    TodoForm1Component,
    StudentformComponent,
    StudenttableComponent,
    Studenttable1Component,
    Studentform1Component,
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProductsModule,
    PassengerModule,
    Tourist1Module,
    TripModule
    
  
   
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
