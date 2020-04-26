import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './interfaces/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  items: any = [];

  constructor(private httpClient: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:8000/api/favorite/');
  }

  addToFavorite(product) {
    this.items.push(product);
  }

}
