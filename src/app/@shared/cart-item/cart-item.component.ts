import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CartItem } from '@app/interfaces';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit, OnDestroy {
  @Input() cartItem: CartItem;
  constructor(public cartService: CartService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  increase() {
    if (this.cartItem.quantity != this.cartItem.product.limit) {
      this.cartItem.quantity += 1;
    }
  }

  decrease() {
    if (this.cartItem.quantity > 0) {
      this.cartItem.quantity -= 1;
    }
  }

  remove() {
    this.cartService.removeProduct(this.cartItem);
  }
}
