import { Component } from '@angular/core';
import { Iproduct, Iproduct2 } from './shared/models/products';

@Component({
  // selector: 'app-root',
  // selector:'.app-root',
  selector:'[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-app';
  skills:Array<string> =["html","CSS","JS"];
  skil:Array<string> =["CSS","SCSS","Arr"];

  product:Array<Iproduct>=[
    { 
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
      avail: true
    },
    {
      name: "T-shirt",
      category: "Clothing",
      price: 19.99,
      avail: false
    },
    {
      name: "Headphones",
      category: "Electronics",
      price: 79.99,
      avail: true
    }
  ];

  product2:Array<Iproduct2>=[
    { 
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
      avail: true
    },
    {
      name: "T-shirt",
      category: "Clothing",
      price: 19.99,
      avail: false
    },
    {
      name: "Headphones",
      category: "Electronics",
      price: 79.99,
      avail: true
    }
  ];
  
}
