import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '@app/products-service.service';
import { Product } from '@app/interfaces';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  value: string;
  search: string;
  categories: string[] = [];
  selectedCats: string[] = [];

  constructor(private productsService: ProductsServiceService) {}

  productsToShow: Product[];
  products: Product[];
  getProducts() {
    this.products = this.productsService.getProducts();
    this.productsToShow = this.products;
  }

  getCategories() {
    this.products.forEach((product) => {
      if (this.categories.indexOf(product.category) == -1) {
        this.categories.push(product.category);
      }
    });
  }

  findProducts() {
    if (this.search === '') {
      // this.changeCategory(this.category);
      this.productsToShow = this.products;
      console.log(this.productsToShow);
      return;
    }
    console.log(this.search);
    this.productsToShow = this.products.filter(
      (p) =>
        (this.selectedCats.length === 0 || this.selectedCats.indexOf(p.category) !== -1) &&
        p.name.toLowerCase().indexOf(this.search) !== -1
    );
    console.log(this.productsToShow);
  }

  selectCat(c: string) {
    if (this.selectedCats.indexOf(c) === -1) {
      this.selectedCats.push(c);
    } else {
      this.selectedCats.splice(this.selectedCats.indexOf(c), 1);
    }

    this.updateProductList();
  }

  updateProductList() {
    this.productsToShow = this.products.filter(
      (p) => this.selectedCats.length === 0 || this.selectedCats.indexOf(p.category) !== -1
    );
  }

  showAll() {
    this.selectedCats = [];
    this.updateProductList();
  }

  checkCat(c: string) {
    console.log(c);
  }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }
}
