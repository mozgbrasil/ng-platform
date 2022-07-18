import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  ngOnInit(): void {}

  openSnackBar(message: string, action: string = '') {
    this._snackBar.open(message, action);
  }

  onSubmit(): void {
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    console.warn();
    this.openSnackBar(
      `Your order has been submitted: ${JSON.stringify(
        this.checkoutForm.value
      )}`
    );
    this.checkoutForm.reset();
  }
}
