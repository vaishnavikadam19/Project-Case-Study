import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AddCategoryComponent } from './admin/categories/add-category/add-category.component';
import { CategoryListComponent } from './admin/categories/category-list/category-list.component';
import { AddProductComponent } from './admin/products/add-product/add-product.component';
import { ProductListComponent } from './admin/products/product-list/product-list.component';
import { LoginService } from './services/login.service';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { ShellComponent } from './shared/shell/shell.component';
// import { HomeComponent } from './User/home/home.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { ProductComponent } from './User/product/product.component';
import { UserRegistrationComponent } from './User/user-registration/user-registration.component';
import { ShareComponent } from './Layout/share/share.component';
import { CartComponent } from './User/cart/cart.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { BillComponent } from './User/bill/bill.component';


const routes: Routes = [

{ path:'',component:ProductComponent,children: [


]},
{ path:'login', component:UserLoginComponent},
{ path:'cart', component:CartComponent},
{ path:'cart/login', component: UserLoginComponent},
{path:'register',component:UserRegistrationComponent},
{ path:'login/register',component:UserRegistrationComponent},
{ path: 'cart/login/register',component:UserRegistrationComponent},
{path:'register/login',component:UserLoginComponent},
{ path: 'cart/login/bill',component:BillComponent},
{ path: 'cart/login/register/bill',component:UserRegistrationComponent},



{ path: 'admin', component:AdminLoginComponent},
  { path: 'shell', component:ShellComponent,
  children : [
    { path : 'category' , component:AddCategoryComponent},
   {path: 'category/category-list' , component:CategoryListComponent},
     {path:'edit', component:AddCategoryComponent},
    { path : 'products' , component : AddProductComponent},
    {path: 'products/product-list' , component: ProductListComponent},


]},
{ path: 'shell/logout', component: AdminLoginComponent}

 ]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
