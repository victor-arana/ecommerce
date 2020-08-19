import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements  {

  public product: Product;
    
  constructor() { }

  

  addProduct(): void{
    this.product.quantity = this.product.quantity + 1;
  }

  removeProduct(): void{
    this.product.quantity = this.product.quantity - 1;
  }


}
