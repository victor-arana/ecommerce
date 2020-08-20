import { Product  } from "./model/product";

export interface ProductQuantityChange {
    product: Product;
    changeInQuantity: number;
}
