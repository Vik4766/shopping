import {Injectable} from '@angular/core';
import {CartModel} from '../models/cart-model';

@Injectable({
  providedIn: 'root',
})
    
export class CartService {
    getCart(): CartModel[] {
        return [
             { id: 1, name: 'Product 1', price: 10.99, quantity: 1 },
             { id: 3, name: 'Product 3', price: 5.99, quantity: 2 },
        ];
    }
  
}
