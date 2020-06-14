import { Injectable } from '@angular/core';
import { CartItem, Product } from '@app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsInCart: CartItem[];
  constructor() {
    this.productsInCart = [];
  }

  addProduct(product: Product, quantity: number): string {
    let p = this.productsInCart.filter((p) => p.product.name == product.name);

    if (p.length != 0) {
      return 'Prodcut Already Added';
    }
    let cartItem: CartItem = {
      product: product,
      quantity: quantity,
    };

    this.productsInCart.push(cartItem);
    return null;
  }

  getProducts(): CartItem[] {
    return this.productsInCart;
  }

  removeProduct(product: CartItem) {
    this.productsInCart.splice(this.productsInCart.indexOf(product), 1);
  }
}
