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
  const extraLargeSize = 64;
  const superLargeSize = 88;
  if (componentSize === 'extra-small') {
    return extraSmallSize;
  }
  if (componentSize === 'small') {
    return smallSize;
  }
  if (componentSize === 'medium') {
    return mediumSize;
  }
  if (componentSize === 'large') {
    return largeSize;
  }
  if (componentSize === 'extra-large') {
    return extraLargeSize;
  }
  if (componentSize === 'super-large') {
    return superLargeSize;
  }
  return largeSize;
};
