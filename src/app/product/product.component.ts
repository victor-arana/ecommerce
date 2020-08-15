import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: Product;
  public onSale: boolean;

  constructor() { }

  ngOnInit(): void {
    this.product = new Product('Coca-cola', 10, 'assets/img/no-data.gif');
    this.onSale = true;
  }

}
