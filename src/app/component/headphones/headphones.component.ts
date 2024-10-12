import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BannerSectionComponent } from "../banner-section/banner-section.component";

@Component({
  selector: 'app-headphones',
  standalone: true,
  imports: [CommonModule, BannerSectionComponent],
  templateUrl: './headphones.component.html',
  styleUrl: './headphones.component.css'
})
export class HeadphonesComponent implements OnInit {
  AllHeadphones: string = "Headphones For You!";

  getAllHeadphones: any = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProductList().subscribe((res) => {
      const headphones = res.data.products;

      this.getAllHeadphones = headphones.filter(item => item.category === 'Headphones');
      // console.log("getAllHeadphones", this.getAllHeadphones); 
    })
  }

  onItemClick(id : any) {
    this.router.navigate(['/single-item'], {queryParams: {'key': id}});
  }
}
