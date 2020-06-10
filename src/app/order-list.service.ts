import { Injectable } from '@angular/core';
import { ORDERS } from './mock-data';
import { Order } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class OrderListService {
  orders = ORDERS;

  constructor() {}

  getOrders(): Order[] {
    return this.orders;
  }

  filterByStatus(status: string): Order[] {
    return this.orders.filter((order) => order.status === status);
  }
}
