import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';
import { BannerSectionComponent } from "../banner-section/banner-section.component";
import { MatDialog } from '@angular/material/dialog';
import { BuyPopComponent } from '../buy-pop/buy-pop.component';

@Component({
  selector: 'app-watch',
  standalone: true,
  imports: [CommonModule, BannerSectionComponent],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.css'
})
export class WatchComponent implements OnInit{
  AllWatches: string = "Watches For You!";

  getAllWatches: any = [];

  constructor(private productService: ProductService, private router: Router, private matDialg: MatDialog) { }

  ngOnInit(): void {
    this.productService.getAllProductList().subscribe((res) => {
      const watch = res.data.products;

      this.getAllWatches = watch.filter(item => item.category === 'Watch');
      // console.log("getAllWatches", this.getAllWatches); 
    })
  }

  onItemClick(id: any) {
    this.router.navigate(['/single-item'], {queryParams: {'key': id}});
  }

  buyNowPop() {
    this.matDialg.open(BuyPopComponent);
  }
}
