import { objectKeys } from './objectKeys';

describe('"objectKeys" function', () => {
  test('Input object, Then keys array', () => {
    const strText = 'text';
    expect(objectKeys({ [strText]: 4, obj: 3, '123': 2 })).toEqual([
      '123',
      'text',
      'obj',
    ]);
  });
});
