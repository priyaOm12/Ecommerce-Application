import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[] = [];
  selectedProduct: IProduct;
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('/assets/products.json');

  }
}

