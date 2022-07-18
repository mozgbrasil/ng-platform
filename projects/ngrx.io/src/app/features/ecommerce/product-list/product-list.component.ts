import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

import { ProductsInterface, products } from '../products/products-interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  constructor(
    private router: Router,
    private cartService: CartService,
    private _snackBar: MatSnackBar
  ) {}

  products = products;

  openSnackBar(message: string, action: string = '') {
    this._snackBar.open(message, action);
  }

  share() {
    this.openSnackBar('The product has been shared!');
  }

  onNotify() {
    this.openSnackBar('You will be notified when the product goes on sale');
  }

  addToCart(product: ProductsInterface) {
    this.cartService.addToCart(product);
    this.openSnackBar('Your product has been added to the cart!');
    this.router.navigate(['/cart']);
  }
}
