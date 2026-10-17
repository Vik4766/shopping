import { Component, inject } from '@angular/core';
import { CartService } from '../cart-service';
import { ProductModel } from '../product-model';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-cart-list',
  styleUrl: './cart-list.component.css',
  templateUrl: './cart-list.component.html',
})
export class CartListComponent {
  cartItems!: ProductModel[];

  cartService = inject(CartService);

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
  }
}
