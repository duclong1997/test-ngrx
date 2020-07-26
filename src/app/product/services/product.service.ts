import { PRODUCT } from './../datas/product-detail.data';
import { PRODUCTS } from './../datas/products.data';
import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProductById(id: number): Observable<Product> {
    return of(PRODUCT);
  }
}
