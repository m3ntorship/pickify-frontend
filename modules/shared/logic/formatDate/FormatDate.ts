import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getNow } from './getNow';

dayjs.extend(relativeTime);

export const humanReadableDate = (date: string): string => {
  return dayjs(date).from(getNow());
};

export const exactDate = (date: string): string => {
  return dayjs(date).format('DD/MM/YYYY HH:mm:ss');
};

export const getYear = (date: string): number => {
  return dayjs(date).year();
};
