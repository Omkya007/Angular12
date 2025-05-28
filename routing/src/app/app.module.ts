import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { UserComponent } from './shared/components/user/user.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { SingComponent } from './shared/components/user/sing/sing.component';
import { UserFormComponent } from './shared/components/user/user-form/user-form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { FairCardComponent } from './shared/components/fairs/fair-card/fair-card.component';
import { FairDetailsComponent } from './shared/components/fairs/fair-details/fair-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    FairsComponent,
    ProductsComponent,
    SingComponent,
    UserFormComponent,
    PageNotFoundComponent,
    ProductComponent,
    ProductFormComponent,
    FairCardComponent,
    FairDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
