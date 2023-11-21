import { getDateDistance, parseDate } from './date';

describe('"parseDate" function', () => {
  test('Input "2023-10-10", Then type Date', () => {
    const date = parseDate('2023-10-10');

    expect(date.getFullYear()).toBe(2023);
    expect(date.getMonth()).toBe(9);
    expect(date.getDate()).toBe(10);
  });

  test('Input Not Valid Date, then Throw Error', () => {
    expect(() => parseDate('2021-22-35')).toThrow('Invalid Date Format');
    expect(() => parseDate('20222-2-44')).toThrow('Invalid Date Format');
  });
});

describe('"getDateDistance" function', () => {
  test('Return Difference between Dates in "day", "month", "minute", "second"', () => {
    const startDate = new Date('2023-10-01 12:00:00');
    const endDate = new Date('2023-10-02 14:10:15');
    expect(getDateDistance(startDate, endDate)).toEqual({
      days: 1,
      hours: 2,
      minutes: 10,
      seconds: 15,
    });
  });
});
