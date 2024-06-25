import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../service/search.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule ,RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isSearchHovered: boolean = false;

  constructor(private searchService: SearchService) { }

  onSearchHover(state: boolean) {
    this.isSearchHovered = state;
  }

  onSearchItems(searchQuery: string) {
    if (searchQuery.trim() === '') {
      console.log('Please enter a search query.');
    } 
    this.searchService.changeSearchQuery(searchQuery);
  }

}
