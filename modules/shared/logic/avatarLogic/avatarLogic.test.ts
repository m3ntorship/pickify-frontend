import { determineAvatarSize } from './avatarLogic';

describe('determineAvatarSize', () => {
  const small = 32;
  const medium = 40;
  const large = 56;
  it('works correctly when given small size', () => {
    const smallSize = determineAvatarSize('small');
    expect(smallSize).toEqual(small);
  });
  it('works correctly when given medium size', () => {
    const mediumSize = determineAvatarSize('medium');
    expect(mediumSize).toEqual(medium);
  });
  it('works correctly when given large size', () => {
    const largeSize = determineAvatarSize('large');
    expect(largeSize).toEqual(large);
  });
});
