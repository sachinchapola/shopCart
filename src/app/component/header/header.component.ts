import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private searchService: SearchService) { }

  onSearchItems(searchQuery: string) {
    if (searchQuery.trim() === '') {
      console.log('Please enter a search query.');
      return;
    } 
    this.searchService.changeSearchQuery(searchQuery);
  }
}
