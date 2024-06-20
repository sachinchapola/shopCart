import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductListingAllResponse } from '../dto/product-listing-response';
import { AllDataResponse } from '../dto/allData-response';
import { ProductListInterface } from '../dto/product-list-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private allproductData: ProductListingAllResponse) {}

  getAllProductList(): Observable<AllDataResponse> {
    const response: AllDataResponse = this.allproductData.allResponseData;
    return of(response);
  }

  getSingleItem(): Observable<ProductListInterface> {
    const response: ProductListInterface = this.allproductData.allResponseData;
    return of(response);
  }
}
