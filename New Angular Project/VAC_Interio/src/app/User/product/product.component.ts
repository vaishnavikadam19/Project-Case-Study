import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productList:any=[];
  CartService: any;

  constructor(private product:ProductService, private cartService:CartService) { }

  ngOnInit(): void {
    this.product.getProduct()
    .subscribe(resp=>{
      this.productList = resp;
      this.productList.forEach((a:any)=>{
      Object.assign(a,{quantity:1, total:a.price});
    })

    })

  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  }


