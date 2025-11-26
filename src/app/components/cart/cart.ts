import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart implements OnInit {
  cartItems:CartItem[]=[];
  total=0;
  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items =>{
      this.cartItems =items;
      this.total =this.cartService.getTotal();
    });
  }
  removeItem(productId:number):void{
    this.cartService.removeFromCart(productId);
  }
  updateQuantity(productId:number,quantity:number):void{
    if(quantity<=0){
      this.removeItem(productId);
    }else{
      this.cartService.updateQuantity(productId,quantity);
    }
  }
  clearCart():void{
    this.cartService.clearCart();
  }
}
