import React, { useState } from 'react';
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
  const [isShown, setIsShown] = useState(false);
  return (
    <div className={styles['outer-wrapper']}>
      <Avatar size={size} variant={variant} imgSrc={imgSrc} />
      <div className={styles['user-wrapper']}>
        <span className={styles.name} data-testid="name">
          {variant === 'anonymous' ? 'Anonymous' : name}
        </span>
        <div
          onMouseEnter={(): void => {
            setIsShown(true);
          }}
          onMouseLeave={(): void => {
            setIsShown(false);
          }}
        >
          {!isShown && (
            <span className={styles.date}>{humanReadableDate(date)}</span>
          )}
          {isShown && <span className={styles.date}>{exactDate(date)}</span>}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
