import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule],
  declarations: [ProductsComponent, ProductDetailsComponent],
  providers: [],
})
export class ProductsModule {}
