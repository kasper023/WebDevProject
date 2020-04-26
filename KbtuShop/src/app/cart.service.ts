import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from './interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any = [];

  constructor(private httpClient: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:8000/api/cart/');
  }

  addToCart(product) {
    this.items.push(product);
  }

  deleteFromCart(id: number) {
    return this.httpClient.delete(`http://localhost:8000/api/cart/${id}`);
  }
}
