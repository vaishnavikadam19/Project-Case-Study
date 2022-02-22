import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

import { ToolbarModule} from 'primeng/toolbar'
import {MatTableModule} from '@angular/material/table';

import {  } from '@angular/material';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ShellComponent } from './shared/shell/shell.component';
import { CategoryListComponent } from './admin/categories/category-list/category-list.component';
import { AddCategoryComponent } from './admin/categories/add-category/add-category.component';
import { ProductListComponent } from './admin/products/product-list/product-list.component';
import { AddProductComponent } from './admin/products/add-product/add-product.component';
// import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {CardModule} from 'primeng/card'
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { ProductComponent } from './User/product/product.component';
import { UserRegistrationComponent } from './User/user-registration/user-registration.component';
// import { UserLoginComponent } from './User/user-login/user-login.component';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule, NgForOf } from '@angular/common';
import { ShareComponent } from './Layout/share/share.component';
import { CartComponent } from './User/cart/cart.component';

import { MatFormField } from '@angular/material/form-field';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { BillComponent } from './User/bill/bill.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    MainNavComponent,
    ShellComponent,
    CategoryListComponent,
    AddCategoryComponent,
    ProductListComponent,
    AddProductComponent,
    NavbarComponent,
    ProductComponent,
    UserRegistrationComponent,

    ShareComponent,
    CartComponent,
    UserLoginComponent,
    BillComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    AccordionModule,
    ReactiveFormsModule,
    CardModule,
    HttpClientModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
