import { Component, computed } from '@angular/core';
import { ProductItemComponent } from '../../shared/components/product-item/product-item.component';

import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor(private readonly _products: ProductService) {}

  products = computed(() => this._products.products2);
}
