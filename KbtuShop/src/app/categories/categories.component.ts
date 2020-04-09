import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {ProductListComponent} from '../product-list/product-list.component';
import {Category} from '../interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
