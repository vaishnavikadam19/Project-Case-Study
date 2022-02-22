import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { ProductService } from '../../../services/product.service';
import { ProductModel } from './product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  formValue !: FormGroup;
  productModelObj : ProductModel = new ProductModel();
  constructor(private formBuilder: FormBuilder, private product : ProductService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      productName : [''],
      description : [''],
      price : [''],
      image : ['']
    })
  }

  postProductDetails(){
    this.productModelObj.productName = this.formValue.value.productName;
    this.productModelObj.description = this.formValue.value.description;
    this.productModelObj.price = this.formValue.value.price;
    this.productModelObj.image = this.formValue.value.image;

    this.product.postProduct(this.productModelObj)
    .subscribe(resp=>{
      console.log(resp);
      alert("Product Added Successfully");
    },
    err=>{
      alert("Something went wrong");
    })
  }
}
