export const symbolGenerator = (index: number): string => {
  const zero = 0;
  let letter = '';
  if (index || index === zero) {
    letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[index];
  } else {
    letter = '#';
  }
  return letter;
};
