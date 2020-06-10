import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';

import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { MaterialModule } from '@app/material.module';
import { FooterComponent } from '@app/@shared/footer/footer.component';
import { SharedModule } from '@app/@shared';

@NgModule({
  imports: [CommonModule, OrdersRoutingModule, MaterialModule, SharedModule],
  declarations: [OrdersComponent, OrderDetailsComponent],
  providers: [],
})
export class OrdersModule {}
