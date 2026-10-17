import {Injectable} from '@angular/core';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root',
})
    
export class CartService {
    getCart(): ProductModel[] {
        return [
            // { id: 1, name: 'Product 1', price: 10.99 },
            // { id: 3, name: 'Product 3', price: 5.99 },
        ];
    }
  
}
