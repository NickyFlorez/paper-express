import { Component, input } from '@angular/core';
import {
  Product,
  ProductService,
} from '../../../pages/products/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  constructor(private readonly _products: ProductService) {}

  product = input.required<Product>();

  addProduct() {
    this._products.cart = [...this._products.cart, this.product()];

    Swal.fire({
      title: 'Producto añadido',
      text: `El producto "${
        this.product().title
      }" se ha añadido correctamente al carrito`,
      icon: 'success',
      draggable: true,
    });
  }
}
