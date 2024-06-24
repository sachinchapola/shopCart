import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-single-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './single-item.component.html',
  styleUrl: './single-item.component.css',
})
export class SingleItemComponent implements OnInit {
  singleItem: any;
  colors: string[] = [];
  images: any;
  buyNowPopUp = false;
  quantity: number = 1;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private cartServics: CartService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // console.log(":::::parsmd", params);

      const id = params['key'];
      // console.log(":::key", id);

      this.getSingleItem(id);
    });
  }

  getSingleItem(id: any) {
    this.productService.getAllProductList().subscribe((res) => {
      const data = res.data.products;

      this.singleItem = data.filter((item) => item.id === id);
      // console.log("id", this.singleItem);

      if (this.singleItem.length > 0) {
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
  }

  changeimage(image: string) {
    this.images[0] = image;
  }
}
