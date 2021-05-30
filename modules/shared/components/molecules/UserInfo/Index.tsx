import React from 'react';
import type { ReactElement, FC } from 'react';
import type { IUserInfo } from './IUserInfo';
import Avatar from '../../atoms/Avatar/Avatar';
import styles from './UserInfo.module.css';

const UserInfo: FC<IUserInfo.IProps> = ({
  size,
  variant,
  imgSrc,
  name,
  date,
}): ReactElement => {
  return (
    <div className={styles['outer-wrapper']}>
      <Avatar size={size} variant={variant} imgSrc={imgSrc} />
      <div className={styles['user-wrapper']}>
        <span className={styles.name} data-testid="name">
          {variant === 'anonymous' ? 'Anonymous' : name}
        </span>
        <span className={styles.date}>{date} ago</span>
      </div>
    </div>
  );
};

export default UserInfo;
