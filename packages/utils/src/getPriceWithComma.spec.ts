import { getPriceWithComma } from './getPriceWithComma';

describe('"getPriceWithComma" function', () => {
  test('Input 10000, Then 10,000', () => {
    expect(getPriceWithComma({ price: '10000' })).toBe('10,000');
  });

  test('Input 100, Then 100', () => {
    expect(getPriceWithComma({ price: '100' })).toBe('100');
  });
});
