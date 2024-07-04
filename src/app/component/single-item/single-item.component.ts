import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { CartItem } from '../../dto/cartItem-interface';

@Component({
  selector: 'app-single-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './single-item.component.html',
  styleUrl: './single-item.component.css',
})
export class SingleItemComponent implements OnInit {
  productId: any;
  productName: any;
  productDesc: any;
  productPrice: any;
  singleItem: any;
  colors: string[] = [];
  images: any;
  buyNowPopUp = false;
  quantity: number = 1;
  maxQuantity: number = 12;
  minQuantity: number = 1;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {

      this.productId = params['key'];

      this.getSingleItem(this.productId);
    });
  }

  getSingleItem(id: any) {
    this.productService.getAllProductList().subscribe((res) => {
      const data = res.data.products;

      this.singleItem = data.filter((item) => item.id === id);

      if (this.singleItem.length > 0) {
        this.productName = this.singleItem[0].name;
        this.productDesc = this.singleItem[0].description;
        this.productPrice = this.singleItem[0].price;
        this.colors = this.singleItem[0].colors;
        this.images = this.singleItem[0].images;
      } else {
        console.log('Item not found');
      }
    });
  }

  buyNow() {
    this.buyNowPopUp = true;
  }

  onButtonClick() {
    this.router.navigate(['/']);
  }

  addToCart() {
    // set value to cartItem 
    const cartItem: CartItem = {
      productId: this.productId,
      name: this.productName,
      description: this.productDesc,
      price: this.productPrice,
      quantity: this.quantity,
      image: this.images[0]
    };

    this.cartService.addItems(cartItem)
  }

  changeimage(image: string) {
    this.images[0] = image;
  }

  increment() {
    if(this.quantity < this.maxQuantity) {
      this.quantity++;
    };
  }

  decrement() {
    if(this.quantity > this.minQuantity) {
      this.quantity--;
    };
  }
}
