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
  public quantity: number;
  public options: Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.product = new Product('Coca-cola', 10, 'assets/img/no-data.gif');
    this.onSale = true;
    this.quantity = 1;
    this.options = new Array<string>(10);
    for(var i = 1; i <= 20; i++){
      this.options[i] = i.toString();
    }
    console.log(this.options);
  }

  addProduct(): void{
    this.quantity = this.quantity + 1;
  }

  removeProduct(): void{
    this.quantity = this.quantity - 1;
  }


}
