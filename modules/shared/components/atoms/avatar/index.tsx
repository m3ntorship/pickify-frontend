import type { FC, ReactElement } from 'react';
import className from 'classnames';
import React from 'react';
import Image from 'next/image';
import type { IAvatar } from './IAvatar';
import { ReactComponent as AnonymousIcon } from './anonymous.svg';
import { ReactComponent as NotFilledIcon } from './notFilled.svg';

export const determineImageSize = (componentSize: string): number => {
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
  const classes = className({
    'w-8 h-8': size === 'small',
    'w-10 h-10': size === 'medium',
    'w-14 h-14': size === 'large',
    'rounded-full': variant === 'filled',
  });
  const imageSize = determineImageSize(size);
  if (variant === 'anonymous') {
    return <AnonymousIcon width={imageSize} height={imageSize} />;
  }
  if (variant === 'filled' && imgSrc !== undefined)
    return (
      <Image
        height={imageSize}
        width={imageSize}
        className={classes}
        src={imgSrc}
      />
    );

  return <NotFilledIcon width={imageSize} height={imageSize} />;
};
export default Index;
