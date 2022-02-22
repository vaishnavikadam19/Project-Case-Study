import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { ProductModel } from '../add-product/product.model';

export interface categories {

}

// const ELEMENT_DATA: categories[] = [
//   {id: 1, name: 'name-1', category: 'category-1',price: 1000,quantity:5},
//   {id: 2,  name: 'name-2', category: 'category-2',price: 1000,quantity:5},
//   {id: 3,  name: 'name-3', category: 'category-3',price: 1000,quantity:5},
//   {id: 1, name: 'name-1',category: 'category-1',price: 1000,quantity:5},
//   {id: 2, name: 'name-2',category: 'category-2',price: 1000,quantity:5},
//   {id: 3, name: 'name-3' ,category: 'category-3',price: 1000,quantity:5},
//   {id: 1, name: 'name-1',category: 'category-1',price: 1000,quantity:5}
// ];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  formValue !: FormGroup;
  productModelObj : ProductModel = new ProductModel();

productData !: any;
  constructor(private formBuilder: FormBuilder, private product : ProductService){}
  // displayedColumns: string[] = ['id', 'name', 'category','price','quantity'];
  // products = ELEMENT_DATA;

  // constructor() { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name : [''],
      icon : ['']
    })
    this.getAllCategory();
  }
  getAllCategory(){
    this.product.getProduct()
    .subscribe(resp=>{
      this.productData = resp;
    })
  }

  deleteProduct(row : any){
    this.product.deleteProduct(row.id)
    .subscribe(resp=>{
      alert("Product deleted successfully!!!");
      this.getAllCategory();
    })
  }
}
