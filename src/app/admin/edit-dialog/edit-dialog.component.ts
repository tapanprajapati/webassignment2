import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '@app/interfaces';

@Component({
  selector: 'app-admin-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  name: string;
  category: string;
  qty: number;
  constructor(public dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Product) {
    this.name = data.name;
    this.category = data.category;
    this.qty = data.quantity;
  }

  ngOnInit(): void {}

  confirm() {
    this.data.name = this.name;
    this.data.category = this.category;
    this.data.quantity = this.qty;
    this.dialogRef.close(this.data);
  }
}
