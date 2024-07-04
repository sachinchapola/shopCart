import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { CartItem } from '../../dto/cartItem-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent implements OnInit {

  cartItemsList:CartItem[] = [];
  itemsCount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItemsList = this.cartService.getCartItems();
    // console.log(":::::::::::::",this.cartItemsList);

    this.itemsCount = this.cartItemsList.length;
    // console.log("itemsCount:::::::::::::",this.itemsCount);
  }

  removeCartItem(productId: string) {
    this.cartService.removeItems(productId);
    this.cartItemsList = this.cartService.getCartItems();
     
    
  }
}
