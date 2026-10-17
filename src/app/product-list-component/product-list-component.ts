import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductComponent } from '../product-component/product-component';
import { ProductsService } from '../products-service';
import { ProductModel } from '../product-model';

@Component({
  imports: [CurrencyPipe, ProductComponent],
  selector: 'app-product-list-component',
  standalone: true,
  styleUrl: './product-list-component.css',
  templateUrl: './product-list-component.html',
})
export class ProductListComponent {
  products!: ProductModel[];

  productsService = inject(ProductsService);

  ngOnInit() {
    this.products = this.productsService.getProducts();
  } 
}
