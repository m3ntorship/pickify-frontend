import type { FC, ReactElement } from 'react';
import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import type { IAvatar } from './IAvatar';
import AnonymousIcon from '../../icons/anonymous.svg';
import NotFilledIcon from '../../icons/notFilled.svg';

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
  const wrapperClasses = classNames('relative rounded-full overflow-hidden', {
    'w-8 h-8': size === 'small',
    'w-10 h-10': size === 'medium',
    'w-14 h-14': size === 'large',
  });
  const avatarSize = determineAvatarSize(size);
  return (
    <div className={wrapperClasses}>
      {variant === 'filled' && imgSrc !== undefined && (
        <Image
          height={avatarSize}
          width={avatarSize}
          className="absolute w-full h-full"
          src={imgSrc}
        />
      )}
      {(variant === 'anonymous' || imgSrc === undefined) && (
        <AnonymousIcon
          className="absolute w-full h-full"
          width={avatarSize}
          height={avatarSize}
        />
      )}
      {variant === 'notFilled' && (
        <NotFilledIcon
          className="absolute w-full h-full"
          width={avatarSize}
          height={avatarSize}
        />
      )}
    </div>
  );
};
export default Index;
