import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: Product;
    
  constructor() { }

  ngOnInit(): void {
    this.product = new Product('Coca-cola', 10, 'assets/img/no-data.gif', true, 1);
  }

  addProduct(): void{
    this.product.quantity = this.product.quantity + 1;
  }

  removeProduct(): void{
    this.product.quantity = this.product.quantity - 1;
  }


}
