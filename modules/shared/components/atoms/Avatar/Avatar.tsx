import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { IAvatar } from './IAvatar';
import AnonymousIcon from '../../icons/anonymous.svg';
import NotFilledIcon from '../../icons/notFilled.svg';
import styles from './Avatar.module.css';
import { determineAvatarSize } from '../../../logic/avatarUtils/utils';

const Avatar: FC<IAvatar.IProps> = ({
  size,
  variant,
  imgSrc,
}): ReactElement => {
  const wrapperClasses = classNames([styles.wrapper], {
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large',
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
export default Avatar;
