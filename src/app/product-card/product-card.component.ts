import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@app/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}
  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 5 * 1000,
    });
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
