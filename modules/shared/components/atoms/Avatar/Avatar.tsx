import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { IAvatar } from './IAvatar';
import AnonymousIcon from '../../icons/anonymous.svg';
import NotFilledIcon from '../../icons/notFilled.svg';
import styles from './Avatar.module.css';
import { determineAvatarSize } from '../../../logic/avatarLogic/avatarLogic';

const Avatar: FC<IAvatar.IProps> = ({
  size,
  variant,
  profilePic,
  onClick = (): void => {
    // void
  },
}): ReactElement => {
  const wrapperClasses = classNames([styles.wrapper], {
    [styles['extra-small']]: size === 'extra-small',
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large',
  });
  const avatarSize = determineAvatarSize(size);
  return (
    <div className={wrapperClasses}>
      {variant === 'filled' && profilePic !== undefined && (
        <Image
          height={avatarSize}
          width={avatarSize}
          className="absolute w-full h-full"
          src={profilePic}
          onClick={onClick}
        />
      )}
      {(variant === 'anonymous' || profilePic === undefined) && (
        <AnonymousIcon
          className="absolute w-full h-full"
          width={avatarSize}
          height={avatarSize}
          onClick={onClick}
        />
      )}
      {variant === 'notFilled' && (
        <NotFilledIcon
          className="absolute w-full h-full"
          width={avatarSize}
          height={avatarSize}
          onClick={onClick}
        />
      )}
    </div>
  );
};
export default Avatar;
