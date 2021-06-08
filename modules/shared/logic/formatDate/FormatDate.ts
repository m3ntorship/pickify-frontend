import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const humanReadableDate = (date: Date): string => {
  return dayjs(date).fromNow();
};

export const exactDate = (date: Date): string => {
  return dayjs(date).format('DD/MM/YYYY HH:mm:ss');
};
