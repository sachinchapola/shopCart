import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../service/search.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { Subscription } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule ,RouterModule, FormsModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{
  isMenuOpen: boolean = false;
  cartItemCount: number = 0;
  private cartSubscription!: Subscription;

  constructor(private searchService: SearchService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.getCartCount().subscribe(count =>{
      this.cartItemCount = count;
      // console.log("cartzCount", this.cartItemCount);
    });
  }

  onSearchItems(searchQuery: string) {
    if (searchQuery.trim() === '') {
      // console.log('Please enter a search query.');
    } 
    this.searchService.changeSearchQuery(searchQuery);
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

}
