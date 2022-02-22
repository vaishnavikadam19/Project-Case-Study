import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { CategoryService } from '../../../services/category.service';
import { CategoryModel } from './category.model'

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  formValue !: FormGroup;
  categoryModelObj : CategoryModel = new CategoryModel();
  constructor(private formBuilder: FormBuilder, private category : CategoryService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name : [''],
      icon : ['']
    })
  }

  postCategory(){
    this.categoryModelObj.name = this.formValue.value.name;
    this.categoryModelObj.icon = this.formValue.value.icon;

    this.category.postCategory(this.categoryModelObj)
    .subscribe(resp=>{
      console.log(resp);
      alert("Category Added Successfully");
      this.formValue.reset();

    },
    err=>{
      alert("Something went wrong!!");
    })
  }

}
