import { Component, computed } from '@angular/core';
import { ProductService } from '../products/products.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private readonly _products: ProductService) {
    this._products.cart.forEach((product) => (this.total += product.price));
  }

  products = computed(() => this._products.cart);
  total = 0;

  subTotal = computed(() => this.total);

  pay() {
    if (this.total > 0) {
      Swal.fire({
        title: '¿Estás seguro de hacer el pedido?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, comprar!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Comprar!',
            text: 'Tu compra se ha completado de manera exitosa',
            icon: 'success',
          });
        }
      });
    } else {
      Swal.fire({
        title: 'Sin productos',
        text: `Tienes que añadir al menos un producto al carrito para continuar`,
        icon: 'warning',
        draggable: true,
      });
    }
  }
}
