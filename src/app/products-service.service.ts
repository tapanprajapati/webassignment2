import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-data';
import { Product } from './interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProductsLike(name: string): Product[] {
    const filterValue = name.toLowerCase();
    console.log(filterValue);

    return PRODUCTS.filter((product) => product.name.toLowerCase().indexOf(filterValue) !== -1);
  }

  findCategory(cat: string): Product[] {
    return PRODUCTS.filter((c) => c.category.toLowerCase() === cat.toLowerCase());
  }

  constructor() {}
}
