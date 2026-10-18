import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first-component/first-component';
import { ProductComponent } from './products/components/product-component/product-component';
import { ProductListComponent } from './products/components/product-list-component/product-list-component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    FirstComponent, 
    ProductComponent,
    ProductListComponent,
    CartListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shopping');
}
