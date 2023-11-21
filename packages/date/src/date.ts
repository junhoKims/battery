import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/ko';

dayjs.extend(customParseFormat);

export function parseDate(str: string) {
  const parsed = dayjs(str, 'YYYY-MM-DD', true);

  if (!parsed.isValid()) {
    throw new Error('Invalid Date Format');
  }

  return parsed.toDate();
}

export function isEqual(date: Date, compareDate: Date) {
  return dayjs(date).isSame(dayjs(compareDate));
}

export function isBefore(date: Date, compareDate: Date) {
  return dayjs(date).isBefore(dayjs(compareDate));
}

export function isAfter(date: Date, compareDate: Date) {
  return dayjs(date).isAfter(dayjs(compareDate));
}

export function getDateDistance(startDate: Date, endDate: Date) {
  const DAY_TO_MS = 1000 * 60 * 60 * 24;
  const HOUR_TO_MS = 1000 * 60 * 60;
  const MINUTE_TO_MS = 1000 * 60;
  const SECOND_TO_MS = 1000;

  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  const distance = endTime - startTime;

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(distance / DAY_TO_MS),
    hours: Math.floor((distance % DAY_TO_MS) / HOUR_TO_MS),
    minutes: Math.floor((distance % HOUR_TO_MS) / MINUTE_TO_MS),
    seconds: Math.floor((distance % MINUTE_TO_MS) / SECOND_TO_MS),
  };
}
