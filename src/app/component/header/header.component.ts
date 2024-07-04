import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../service/search.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule ,RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isSearchHovered: boolean = false;
  cartItemCount = 0;

  constructor(private searchService: SearchService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartCount().subscribe(count =>{
      this.cartItemCount = count;
      // console.log("cartzCount", this.cartItemCount);

    });
  }

  onSearchHover(state: boolean) {
    this.isSearchHovered = state;
  }

  onSearchItems(searchQuery: string) {
    if (searchQuery.trim() === '') {
      // console.log('Please enter a search query.');
    } 
    this.searchService.changeSearchQuery(searchQuery);
  }

}
