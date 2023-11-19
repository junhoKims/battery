export function objectKeys<T extends Record<string | number, unknown>>(
  obj: T,
): Array<keyof T> {
  return Object.keys(obj) as Array<keyof T>;
}
