import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchQuery: string = '';

  constructor(
    private productService: ProductService,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProductList().subscribe((res) => {
      this.products = res.data.products;
      this.filteredProducts = this.products;

      this.searchService.currentSearchQuery.subscribe((query) => {
        this.searchQuery = query;
        this.filterProducts();
      });
    });
  }

  filterProducts() {
    if (this.searchQuery.trim() === '') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (product) =>
          product.category
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  onItemClick(id: any) {
    // console.log("::::", id);
    this.router.navigate(['/single-item'], { queryParams: { key: id } });
  }
}
