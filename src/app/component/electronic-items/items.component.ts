import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SearchService } from '../../service/search.service';
import { CartItem } from '../../dto/cartItem-interface';
import { CartService } from '../../service/cart.service';
import { ProductListInterface } from '../../dto/product-list-interface';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent implements OnInit {
  products: ProductListInterface[] = [];
  filteredProducts: ProductListInterface[] = [];
  searchQuery: string = '';
  productId: any;
  productName: any;
  productDesc: any;
  productPrice: any;
  productQty: number = 1;
  productImage: any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private searchService: SearchService,
    private cartService: CartService
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
    this.router.navigate(['/single-item'], { queryParams: { key: id } });
  }

  applyPriceFilter() {
    this.products.sort((a,b) => a.price - b.price);
  }

  applyReviewFilter() {
    return this.products.sort((a,b) => a.reviewsCount - b.reviewsCount);
  }

  addToCart(id:any) {
    
    const data = this.products;

    const selectedData:ProductListInterface[] = data.filter(item => item.id === id);
    console.log(`ItemsComponent addToCart id = ${id}`, selectedData);
    
    if (selectedData.length ) {
      this.productId = selectedData[0].id;
      this.productName = selectedData[0].name;
      this.productDesc = selectedData[0].description;
      this.productPrice  = selectedData[0].price;
      this.productImage = selectedData[0].images[0];
      
    }    

    const cartItem: CartItem = {
      productId: this.productId,
      name: this.productName,
      description: this.productDesc,
      price: this.productPrice,
      quantity: this.productQty,
      image: this.productImage
    }

    this.cartService.addItems(cartItem);
  }
}
