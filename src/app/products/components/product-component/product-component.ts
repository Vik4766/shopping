import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product-component',
  styleUrl: './product-component.css',
  templateUrl: './product-component.html',
})
export class ProductComponent {
  onAddToCart() {
    console.log('Product added to cart!');
  }
}
