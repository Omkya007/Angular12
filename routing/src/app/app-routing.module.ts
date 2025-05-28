import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { UserComponent } from './shared/components/user/user.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { SingComponent } from './shared/components/user/sing/sing.component';
import { UserFormComponent } from './shared/components/user/user-form/user-form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { FairDetailsComponent } from './shared/components/fairs/fair-details/fair-details.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'user',
    component:UserComponent,
    children:[
      {
        path:'addUser',
        component:UserFormComponent
      },
      {
        path:':userId/edit',
        component:UserFormComponent
      },
      {
        path:':userId',
        component:SingComponent
      },
    ]
  },
  // {
  //   path:'user/addUser',
  //   component:UserFormComponent
  // },
  // {
  //   path:'user/:userId/edit',
  //   component:UserFormComponent
  // },
  // {
  //   path:'user/:userId',
  //   component:SingComponent
  // },
  {
    path:'fairs',
    component:FairsComponent,
    children:[
      {
        path:':fairId',
        component:FairDetailsComponent
      }
    ]
  },
  {
    path:'products',
    component:ProductsComponent,
    children:[
      {
        path:'addProduct',
        component:ProductFormComponent
      },
      {
        path:':productId',
        component:ProductComponent
      },
      {
        path:':productId/edit',
        component:ProductFormComponent
      }
    ]
  },
  // {
  //   path:'page-not-found',
  //   component:PageNotFoundComponent
  // },{
  //   path:'**',
  //   redirectTo:'page-not-found'
  // },
  // {
  //   path:'products/addProduct',
  //   component:ProductFormComponent
  // },
  // {
  //   path:'products/:productId',
  //   component:ProductComponent
  // },
  // {
  //   path:'products/:productId/edit',
  //   component:ProductFormComponent
  // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
