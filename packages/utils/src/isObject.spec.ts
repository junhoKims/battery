import { isObject } from './isObject';

describe('"isObject" function', () => {
  test('Input Array, Then "false"', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(isObject([1, 2, 3, 4])).toBe(false);
  });

  test('Input Function, Then "false"', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(isObject(() => 4)).toBe(false);
  });

  test('Input { x: \'dev\' }, Then "true"', () => {
    expect(isObject({ x: 'dev' })).toBe(true);
  });
});
