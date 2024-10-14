import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-place-order-pop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './place-order-pop.component.html',
  styleUrl: './place-order-pop.component.css'
})
export class PlaceOrderPopComponent {
  constructor(private router: Router, private cartService: CartService, private matDialog: MatDialog) { }


  onButtonClick() {
    this.cartService.clearCart();
    this.router.navigate(['/']);
    this.matDialog.closeAll();
  }
}
