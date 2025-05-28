import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
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
  path:'users',
  component:UsersComponent,
  children:[
    {
      path:'addUser',
      component:UserFormComponent
    },
    {
      path:':userid',
      component:UserComponent
    },
    {
      path:':userid/edit',
      component:UserFormComponent
    },
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
      path:':pid',
      component:ProductComponent
    },
    {
      path:':pid/edit',
      component:ProductFormComponent
    },
  ]
},


{
  path:'fairs',
  component:FairsComponent,
  children:[
    {
      path:':fairId',
      component:FairDetailsComponent
    }
  ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
