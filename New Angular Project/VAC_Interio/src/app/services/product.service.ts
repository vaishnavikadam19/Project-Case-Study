import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  getProduct(){
    return this.http.get<any>("http://localhost:3000/app/products")
    .pipe(map((resp:any)=>{
      return resp;
    }))
  }


postProduct(data : any){
  return this.http.post<any>("http://localhost:3000/app/products/add", data)
  .pipe(map((resp : any)=>{
    return resp;
  }))
}
// getCategory(){
//   return this.http.get<any>("http://localhost:3000/app/Categories")
//   .pipe(map((resp : any)=>{
//     return resp;
//   }))
// }
updateProduct(data :any,id: number){
  return this.http.put<any>("http://localhost:3000/app/products/update"+id,data)
  .pipe(map((resp : any)=>{
    return resp;
  }))
}
deleteProduct(id: number){
  return this.http.delete<any>("http://localhost:3000/app/products/delete/"+id)
  .pipe(map((resp : any)=>{
    return resp;
  }))
}

}

function data(data: any, any: any) {
  throw new Error('Function not implemented.');
}

function postProduct(data: (data: any, any: any) => void, any: any) {
  throw new Error('Function not implemented.');
}

