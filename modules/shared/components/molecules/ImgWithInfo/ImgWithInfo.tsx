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
}): ReactElement => {
  const username = title.length !== 0 ? title : 'Anonymous';

  return (
    <div className={styles['outer-wrapper']}>
      {variant === 'avatar' && (
        <Avatar
          size="medium"
          variant={handleImgWithInfoVariant(isHidden, profilePic)}
          profilePic={profilePic}
        />
      )}
      {variant === 'icon' && children}
      <div className={styles['user-wrapper']}>
        <span className={styles.title} data-testid="title">
          {username}
          {isHidden && title && (
            <span className="ml-2 text-grey text-xs">(posted anonymously)</span>
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
