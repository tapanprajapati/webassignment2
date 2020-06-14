import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public cartService: CartService, public dialog: MatDialog) {}

  openCart() {
    const dialogRef = this.dialog.open(CartDialogComponent, {});
  }

  ngOnInit() {}
}
