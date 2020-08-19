import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Array<Product>;

  constructor() { }

  ngOnInit(): void {
    this.products = new Array<Product>(2);
    this.products[0] = new Product('Coca-cola', 10, 'assets/img/no-data.gif', true, 0);
    this.products[1] = new Product('Mirinda', 8, 'assets/img/no-data.gif', true, 1)
    this.products[2] = new Product('Sprite', 20,'assets/img/no-data.gif' ,false, 9);
  }

}
