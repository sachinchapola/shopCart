import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { BannerSectionComponent } from "../banner-section/banner-section.component";

@Component({
  selector: 'app-phones',
  standalone: true,
  imports: [CommonModule, BannerSectionComponent],
  templateUrl: './phones.component.html',
  styleUrl: './phones.component.css'
})
export class PhonesComponent implements OnInit {
  AllPhones: string = "Mobiles For You!";

  getAllMoblies: any = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProductList().subscribe((res) => {
      const phones = res.data.products;

      this.getAllMoblies = phones.filter(item => item.category === 'Mobile');
      // console.log("getAllMoblies", this.getAllMoblies); 
    })
  }

  onItemClick(id: any) {
    this.router.navigate(['/single-item'], {queryParams: {'key': id}});
  }
}
