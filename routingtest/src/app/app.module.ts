import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { UsersComponent } from './shared/components/users/users.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { FairCardComponent } from './shared/components/fairs/fair-card/fair-card.component';
import { FairDetailsComponent } from './shared/components/fairs/fair-details/fair-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FairsComponent,
    ProductsComponent,
    HomeComponent,
    NavbarComponent,
    UserComponent,
    UserFormComponent,
    ProductComponent,
    ProductFormComponent,
    FairCardComponent,
    FairDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
