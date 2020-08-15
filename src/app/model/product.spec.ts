import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product('Coca-cola', 10, "coca-cola.png")).toBeTruthy();
  });
});
