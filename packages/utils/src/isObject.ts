export function isObject(value: {
  [key: string]: unknown;
}): value is { [key: string]: unknown } {
  return value !== null && !Array.isArray(value) && typeof value === 'object';
}
