import React from 'react';
import type { ReactElement, FC } from 'react';
import type { IImgWithInfo } from './IImgWithInfo';
import Avatar from '../../atoms/Avatar/Avatar';
import styles from './ImgWithInfo.module.css';
import { handleImgWithInfoVariant } from '../../../logic/imgWithInfoVariant/imgWithInfoVariant';

const ImgWithInfo: FC<IImgWithInfo.IProps> = ({
  isHidden,
  profilePic,
  title = '',
  subTitle,
  description,
  variant,
  children,
  avatarSize = 'medium',
}): ReactElement => {
  const username = title.length !== 0 ? title : 'Anonymous';

  return (
    <div className={styles['outer-wrapper']}>
      {variant === 'avatar' && (
        <div className="w-full h-full">
          <Avatar
            size={avatarSize}
            variant={handleImgWithInfoVariant(isHidden, profilePic)}
            profilePic={profilePic}
          />
        </div>
      )}
      {variant === 'icon' && children}
      <div className={styles['user-wrapper']}>
        <span className={styles.title} data-testid="title">
          {username}
          {isHidden && title && (
            <span className="ml-2 text-grey text-xs">(anonymous)</span>
          )}
        </span>
        <span title={description} className={styles.subTitle}>
          {subTitle}
        </span>
      </div>
    </div>
  );
};

export default ImgWithInfo;
