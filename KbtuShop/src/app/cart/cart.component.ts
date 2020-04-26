import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = [];


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    const a = this.cartService.getProduct();
    a.subscribe(cat => this.items = cat );
  }

  delete() {

  }

  // removeItem(name) {
  //   for ( let i = 0; i < this.items.length; i++) {
  //     if( this.items[i].name === name )
  //       this.items.splice(i--, 1);
  //   }
  // }

}
