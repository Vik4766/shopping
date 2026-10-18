import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { CurrencyPipe } from '@angular/common';
import { CartModel } from '../../models/cart-model';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-cart-list',
  styleUrl: './cart-list.component.css',
  templateUrl: './cart-list.component.html',
})
export class CartListComponent {
  cartItems!: CartModel[];

  cartService = inject(CartService);

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
  }
}
