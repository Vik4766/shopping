import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first-component/first-component';
import { ProductComponent } from './product-component/product-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { CartListComponent } from './cart-list/cart-list.component';

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
