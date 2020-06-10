import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModel } from './cart-routing.module';

import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [CommonModule, CartRoutingModel],
  declarations: [CartComponent, CartItemComponent],
  providers: [],
})
export class CartModule {}
