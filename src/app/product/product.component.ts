import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent{

  @Input() public product: Product;
  @Output() private quantityChange: EventEmitter<ProductQuantityChange> = new EventEmitter();
    
  constructor() { }

  addProduct(): void{
    this.quantityChange.emit({product: this.product, changeInQuantity: 1});
  }

  removeProduct(): void{
    this.quantityChange.emit({product: this.product, changeInQuantity: -1});
  }


}
