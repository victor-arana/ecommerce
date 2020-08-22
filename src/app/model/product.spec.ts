import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(0, 'Coca-cola', 10, "coca-cola.png", true, 1)).toBeTruthy();
  });
});
