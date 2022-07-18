import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductsInterface } from '../products/products-interface';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent implements OnInit {
  constructor() {}

  @Input() product: ProductsInterface | undefined;
  @Output() notify = new EventEmitter();

  ngOnInit(): void {}
}
