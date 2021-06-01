import React from 'react';
import type { ReactElement, FC } from 'react';
import type { IUserInfo } from './IUserInfo';
import Avatar from '../../atoms/avatar/Avatar';
import styles from './UserInfo.module.css';
import {
  humanReadableDate,
  exactDate,
} from '../../../logic/formatDate/FormatDate';

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
        <span title={exactDate(date)} className={styles.date}>
          {humanReadableDate(date)}
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
