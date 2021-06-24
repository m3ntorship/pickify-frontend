import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getNow } from './getNow';

dayjs.extend(relativeTime);

export const humanReadableDate = (date: Date): string => {
  return dayjs(date).from(getNow());
};

export const exactDate = (date: Date): string => {
  return dayjs(date).format('DD/MM/YYYY HH:mm:ss');
};
