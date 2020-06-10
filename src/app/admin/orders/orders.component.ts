import { Component, OnInit, ViewChild } from '@angular/core';
import { Order, Product } from '@app/interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OrderListService } from '@app/order-list.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class AdminOrdersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userid', 'placed_date', 'pickup_date', 'status', 'view'];
  dataSource: MatTableDataSource<Order>;

  total: number;
  pending: number;
  processing: number;
  completed: number;
  rejected: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private orderService: OrderListService) {}

  ngOnInit() {
    this.getData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.getNumbers();
  }

  getData() {
    this.dataSource = new MatTableDataSource<Order>(this.orderService.getOrders());
  }

  getNumbers() {
    this.total = this.dataSource.data.length;
    this.pending = this.dataSource.data.filter((order) => order.status === 'PENDING').length;
    this.rejected = this.dataSource.data.filter((order) => order.status === 'REJECTED').length;
    this.processing = this.dataSource.data.filter((order) => order.status === 'PROCESSING').length;
    this.completed = this.dataSource.data.filter((order) => order.status === 'COMPLETED').length;
  }

  getOrdersByStatus(status: string) {
    if (status === 'TOTAL') {
      this.dataSource.data = this.orderService.getOrders();
      return;
    }
    this.dataSource.data = this.orderService.filterByStatus(status);
  }
}
