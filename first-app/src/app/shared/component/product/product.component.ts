import { Component } from "@angular/core";



@Component({
    selector:`app-product`,
    templateUrl:`./product.component.html`,
    styleUrls:[`./product.component.scss`]
})
export class ProductComponent{
   productName:string='Samsung';
   productId:number =123;
   username:string ='om';
   imgSrc:string ='https://tse2.mm.bing.net/th?id=OIP.4pED-q1sgWSjlAAHMGh2wwHaJ4&pid=Api&P=0&h=180';
}