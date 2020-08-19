import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  @Input() public product: Product;
    
  constructor() { }

  addProduct(): void{
    this.product.quantity = this.product.quantity + 1;
  }

  removeProduct(): void{
    this.product.quantity = this.product.quantity - 1;
  }


}
