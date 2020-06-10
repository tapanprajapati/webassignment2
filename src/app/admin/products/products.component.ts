import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Product } from '@app/interfaces';
import { PRODUCTS } from '@app/mock-data';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category', 'total', 'limit', 'on_order', 'delete'];
  dataSource = new MatTableDataSource<Product>(PRODUCTS);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  delete(product: Product) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.data.splice(this.dataSource.data.indexOf(product), 1);
        this.dataSource.data = this.dataSource.data;
      }

      console.log(result);
    });
  }

  edit(product: Product) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }

      // console.log(result);
    });
  }
}
