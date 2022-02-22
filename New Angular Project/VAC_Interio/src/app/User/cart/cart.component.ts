import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }




  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(resp=>{
      this.products = resp;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  // displayTotalAmount(){

    // var total=0;

    // this.cartService.forEach(function(item){

    //   total += item.cart.quantity * item.price;

    // })

    // return total;

    // }
}
