import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';

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
    this.products[0] = new Product(1, 'Coca-cola', 10, 'assets/img/no-data.gif', true, 1);
    this.products[1] = new Product(2, 'Mirinda', 8, 'assets/img/no-data.gif', true, 1)
    this.products[2] = new Product(3, 'Sprite', 20,'assets/img/no-data.gif' ,true, 9);
  }

  onQuantityChange(change: ProductQuantityChange){
    const product = this.products.find( prod => {return change.product.id === prod.id});
    product.quantity += change.changeInQuantity;
  }

}
