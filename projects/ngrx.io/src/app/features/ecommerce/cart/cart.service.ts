import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductsInterface } from '../products/products-interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  items: ProductsInterface[] = [];

  addToCart(product: ProductsInterface) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
