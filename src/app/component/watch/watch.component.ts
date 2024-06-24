import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-watch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.css'
})
export class WatchComponent implements OnInit{

  getAllWatches: any = [];

  constructor(private productService: ProductService, private router: Router) { }

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
}
