import type { FC, ReactElement } from 'react';
import React from 'react';
import Image from 'next/image';
import type { IAvatar } from './IAvatar';
import AnonymousIcon from './anonymous.svg';
import NotFilledIcon from './notFilled.svg';

export const determineAvatarSize = (componentSize: string): number => {
  const smallSize = 32;
  const mediumSize = 40;
  const largeSize = 56;
  if (componentSize === 'small') {
    return smallSize;
  }
  if (componentSize === 'medium') {
    return mediumSize;
  }
  return largeSize;
};

const Index: FC<IAvatar.IProps> = ({ size, variant, imgSrc }): ReactElement => {
  const avatarSize = determineAvatarSize(size);
  if (variant === 'anonymous') {
    return <AnonymousIcon width={avatarSize} height={avatarSize} />;
  }
  if (variant === 'filled' && imgSrc !== undefined)
    return <Image height={avatarSize} width={avatarSize} src={imgSrc} />;

  return <NotFilledIcon width={avatarSize} height={avatarSize} />;
};
export default Index;
