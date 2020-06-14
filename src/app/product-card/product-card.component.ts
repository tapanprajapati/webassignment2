import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@app/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '@app/@shared/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  constructor(private _snackBar: MatSnackBar, public cartService: CartService) {}

  ngOnInit(): void {}
  addToCart() {
    if (this.cartService.addProduct(this.product, 1) != null) {
      alert('Already Added To Cart');
    } else {
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 5 * 1000,
      });
    }
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'add-to-cart-snackbar.html',
  styles: [
    `
      .snackbar {
        color: white;
        font-weight: bold;
        text-align: center;
      }
    `,
  ],
})
export class SnackbarComponent {}
