import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ProductListInterface } from '../../dto/product-list-interface';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './single-item.component.html',
  styleUrl: './single-item.component.css'
})
export class SingleItemComponent implements OnInit{
  singleItem: any;
  colors: any = [];
  images: any = [];
  buyNowPopUp = false;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // console.log(":::::parsmd", params);

      const id = params['key'];
      // console.log(":::key", id);

      this.getSingleItem(id);
      
    })

  }
  
  getSingleItem(id: any) {
    this.productService.getAllProductList().subscribe((res) => {
      const data = res.data.products;
      // console.log("data::", data);

      this.singleItem = data.filter(item => item.id === id);
      // console.log("id", this.singleItem);

      if (this.singleItem.length > 0) {
        this.colors = this.singleItem[0].colors;
        // console.log("Colors", this.colors);

        this.images = this.singleItem[0].images;
        // console.log("images", this.images);
      }
      else {
        console.log("Item not found")
      }
    });
  }

  buyNow() {
    this.buyNowPopUp = true;
  }

  onButtonClick() {
    this.router.navigate(['/']);
  }
}
