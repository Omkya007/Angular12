import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/component/product/product.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { TestComponent } from './shared/component/test/test.component';
import { Sfc } from './shared/component/singleComp/sfc';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './shared/component/todo/todo.component';
import { Std1Component } from './shared/component/std1/std1.component';
import { Std2Component } from './shared/component/std2/std2.component';
import { Std3Component } from './shared/component/std3/std3.component';
import { Product1Component } from './shared/component/product1/product1.component';
import { PostsComponent } from './shared/component/posts/posts.component';

import { MobileComponent } from './shared/component/mobile/mobile.component';
import { Mobile1Component } from './shared/component/mobile1/mobile1.component';
import { TabComponent } from './shared/component/tab/tab.component';
import { Tab1Component } from './shared/component/tab1/tab1.component';
import { Tab2Component } from './shared/component/tab2/tab2.component';
import { NgswitchComponent } from './shared/component/ngswitch/ngswitch.component';
import { CssHigh } from './shared/directives/cssHigh.directive';
import { CssRendrerDirective } from './shared/directives/css-rendrer.directive';

import { AppLowerDirective } from './shared/directives/app-lower.directive';
import { CreditCardDirective } from './shared/directives/credit-card.directive';
import { ToptoBDirective } from './shared/directives/topto-b.directive';





@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    TestComponent,
    Sfc,
    TodoComponent,
    Std1Component,
    Std2Component,
    Std3Component,
    Product1Component,
    PostsComponent,
    MobileComponent,
    Mobile1Component,
    TabComponent,
    Tab1Component,
    Tab2Component,
    NgswitchComponent,
    CssHigh,
    CssRendrerDirective,
    
    AppLowerDirective,
         CreditCardDirective,
         ToptoBDirective,
   
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
