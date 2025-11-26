import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
cartItemCount=0;
constructor(private cartService:CartService){
  this.cartService.cart$.subscribe(items=>{
    this.cartItemCount = items.reduce((count,item)=>count + item.quantity,0);
    
  })
}
}
