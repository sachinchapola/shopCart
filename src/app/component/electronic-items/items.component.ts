import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  getAllProduct: any;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProductList().subscribe((res) => {
      const product = res.data.products;      
      this.getAllProduct = product;
      // console.log("::", this.getAllProduct);
    })
  }

  onItemClick(id : any) {
    console.log("::::", id);
    this.router.navigate(['/single-item'], {queryParams: {'key': id}});
  }

}