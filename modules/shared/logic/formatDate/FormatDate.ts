import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const humanReadableDate = (date: Date): string => {
  const formatedDate = dayjs(date).fromNow();
  return formatedDate;
};

export const exactDate = (date: Date): string => {
  const formatedDate = dayjs(date).format('DD/MM/YYYY HH:mm:ss');
  return formatedDate;
};
