import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProductsInterface, products } from '../products/products-interface';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private _snackBar: MatSnackBar
  ) {}

  product: ProductsInterface | undefined;

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  openSnackBar(message: string, action: string = '') {
    this._snackBar.open(message, action);
  }

  addToCart(product: ProductsInterface) {
    this.cartService.addToCart(product);
    this.openSnackBar('Your product has been added to the cart!');
    this.router.navigate(['/cart']);
  }
}
