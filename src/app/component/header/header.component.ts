import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private productService: ProductService) { }

  onSearchItems(searchQuery:any) {
    console.log("::::::",searchQuery);
    this.productService.getAllProductList().subscribe((res) => {
      const product = res.data.products;
      console.log(product);      

      const selectedItem = product.filter(item => item.category === searchQuery);
      console.log(selectedItem);
    })
   
    
  }
}
