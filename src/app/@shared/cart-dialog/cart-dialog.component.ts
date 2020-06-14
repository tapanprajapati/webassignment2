import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product, CartItem } from '@app/interfaces';
import { CartService } from '@app/@shared/cart.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss'],
})
export class CartDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CartDialogComponent>, public cartService: CartService) {}

  ngOnInit(): void {}
}
