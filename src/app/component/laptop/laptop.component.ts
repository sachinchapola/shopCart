import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { BannerSectionComponent } from "../banner-section/banner-section.component";
import { MatDialog } from '@angular/material/dialog';
import { BuyPopComponent } from '../buy-pop/buy-pop.component';

@Component({
  selector: 'app-laptop',
  standalone: true,
  imports: [CommonModule, BannerSectionComponent],
  templateUrl: './laptop.component.html',
  styleUrl: './laptop.component.css'
})
export class LaptopComponent implements OnInit {
  AllLaptop: string = "Laptop For You!";
  getAllLaptop: any = [];

  constructor(private productService: ProductService, private router: Router, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.productService.getAllProductList().subscribe((res) => {
      const laptop = res.data.products;

      this.getAllLaptop = laptop.filter(item => item.category === 'Laptop');
      // console.log("allLaptop", this.getAllLaptop); 
    })
  }

  onItemClick(id : any) {
    this.router.navigate(['/single-item'], {queryParams: {'key': id}});
  }

  buyNowPop() {
    this.matDialog.open(BuyPopComponent)
  }

}
