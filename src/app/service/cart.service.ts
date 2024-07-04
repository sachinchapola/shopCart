import { Injectable } from '@angular/core';
import { CartItem } from '../dto/cartItem-interface';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList: CartItem[] = []; 
  existingItemIndex : any;
  cartCountSubject  = new BehaviorSubject<number>(0);

  addItems(cartItem: CartItem) {

    // check is same items is present in the list 
    this.existingItemIndex = this.cartItemList.findIndex(item => item.productId === cartItem.productId);
    
    
    // if yes -> remove old items , then add new items 
    if(this.existingItemIndex !== -1 ) {
      this.cartItemList.splice(this.existingItemIndex, 1);
    }

    this.cartItemList.push(cartItem);

    this.cartCountSubject .next(this.cartItemList.length)

  
    // console.log("cartItemCount:::::::", this.cartItemCount);

  }

  removeItems(productId: string) {
    this.cartItemList = this.cartItemList.filter(items => items.productId != productId)
    // console.log("Items removed from the list:::", this.cartItemList);
    this.cartCountSubject.next(this.cartItemList.length);
  }

  getCartItems(): CartItem[]{
   return this.cartItemList;
  }
  
  getCartCount(){
    return this.cartCountSubject.asObservable();
  }

}

