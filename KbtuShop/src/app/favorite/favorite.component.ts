import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  items: Product[] = [];


  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    const a = this.favoriteService.getProduct();
    a.subscribe(cat => this.items = cat );
  }
}
