import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { CartItem } from '../../dto/cartItem-interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PlaceOrderPopComponent } from '../place-order-pop/place-order-pop.component';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent implements OnInit {

  cartItemsList:CartItem[] = [];
  itemsCount = 0;

  constructor(private cartService: CartService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.cartItemsList = this.cartService.getCartItems();
    console.log(":::::::::::::",this.cartItemsList);

    this.itemsCount = this.cartItemsList.length;
    console.log("itemsCount:::::::::::::",this.itemsCount);
  }

  removeCartItem(productId: string) {
    this.cartService.removeItems(productId);
    this.cartItemsList = this.cartService.getCartItems();
  }

  placeOrder() {
    // this.placeOrderAlert = true;
    let dialogRef = this.matDialog.open(PlaceOrderPopComponent); 
  }
}
