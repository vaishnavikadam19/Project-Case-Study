import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { CategoryModel } from '../add-category/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  formValue !: FormGroup;
  categoryModelObj : CategoryModel = new CategoryModel();

categoryData !: any;
  constructor(private formBuilder: FormBuilder, private category : CategoryService){}


  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name : [''],
      icon : ['']
    })
    this.getAllCategory();
    // this.deleteCategory(row);
  }
  getAllCategory(){
    this.category.getCategory()
    .subscribe(resp=>{
      this.categoryData = resp;
    })
  }

  deleteCategory(row : any){
    this.category.deleteCategory(row.id)
    .subscribe(resp=>{
      alert("Category deleted successfully!!!");
      this.getAllCategory();
    })
  }
}

function row(row: any) {
  throw new Error('Function not implemented.');
}

