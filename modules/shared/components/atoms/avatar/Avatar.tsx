import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { IAvatar } from './IAvatar';
import AnonymousIcon from '../../icons/anonymous.svg';
import NotFilledIcon from '../../icons/notFilled.svg';
import styles from './Avatar.module.css';

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

const Avatar: FC<IAvatar.IProps> = ({
  size,
  variant,
  profile_pic,
}): ReactElement => {
  const wrapperClasses = classNames([styles.wrapper], {
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large',
  });
  const avatarSize = determineAvatarSize(size);
  return (
    <div className={wrapperClasses}>
      {variant === 'filled' && profile_pic !== undefined && (
        <Image
          height={avatarSize}
          width={avatarSize}
          className="absolute w-full h-full"
          src={profile_pic}
        />
      )}
      {(variant === 'anonymous' || profile_pic === undefined) && (
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
export default Avatar;
