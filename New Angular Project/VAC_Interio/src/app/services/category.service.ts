import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  postCategory(data : any){
    return this.http.post<any>("http://localhost:3000/app/Categories/add", data)
    .pipe(map((resp : any)=>{
      return resp;
    }))
  }
  getCategory(){
    return this.http.get<any>("http://localhost:3000/app/Categories")
    .pipe(map((resp : any)=>{
      return resp;
    }))
  }
  updateCategory(data :any,id: number){
    return this.http.put<any>("http://localhost:3000/app/Categories/update"+id,data)
    .pipe(map((resp : any)=>{
      return resp;
    }))
  }
  deleteCategory(id: number){
    return this.http.delete<any>("http://localhost:3000/app/Categories/delete/"+id)
    .pipe(map((resp : any)=>{
      return resp;
    }))
  }
}
