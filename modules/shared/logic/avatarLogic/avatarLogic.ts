/**
 * This function accepts a string as a parameter and return a number representing the desired size
 * @param componentSize - The function parameter
 * @returns number representing avatar size
 */

export const determineAvatarSize = (componentSize: string): number => {
  const extraSmallSize = 24;
  const smallSize = 32;
  const mediumSize = 40;
  const largeSize = 56;
  if (componentSize === 'extra-small') {
    return extraSmallSize;
  }
  if (componentSize === 'small') {
    return smallSize;
  }
  if (componentSize === 'medium') {
    return mediumSize;
  }
  return largeSize;
};
