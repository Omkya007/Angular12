import { NgModule } from "@angular/core";
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[
    ProductDashboardComponent,
    ProductFormComponent,
    ProductCardComponent
  ],
    imports:[CommonModule,
        MatButtonModule,
        FormsModule

    ],
    exports:[ProductDashboardComponent]
})
export class ProductsModule{
   
    constructor(){
        console.log(`Products`);
        
    }
    

}