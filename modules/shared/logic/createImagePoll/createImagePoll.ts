export const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const randId = (): number => {
  const randonNumb = 100000;
  return Math.floor(Math.random() * randonNumb);
};
