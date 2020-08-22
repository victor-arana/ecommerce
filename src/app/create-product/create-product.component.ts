import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  public product: Product;
  constructor() { 
    this.product = new Product(1,"The bends", 1, "assets/img/no-data.gif", true, 1);
  }

  createProduct(){
    console.log("Creating product");
  }

}
