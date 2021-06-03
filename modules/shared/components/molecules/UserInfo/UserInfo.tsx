import React from 'react';
import type { ReactElement, FC } from 'react';
import type { IUserInfo } from './IUserInfo';
import Avatar from '../../atoms/Avatar/Avatar';
import styles from './UserInfo.module.css';
import {
  humanReadableDate,
  exactDate,
} from '../../../logic/formatDate/FormatDate';

import { handleAvatarVariant } from '../../../logic/userInfoVariant/userInfoVariant';

const UserInfo: FC<IUserInfo.IProps> = ({
  isHidden,
  profilePic,
  name,
  date,
}): ReactElement => {
  return (
    <div className={styles['outer-wrapper']}>
      <Avatar
        size="medium"
        variant={handleAvatarVariant(isHidden, profilePic)}
        profilePic={profilePic}
      />
      <div className={styles['user-wrapper']}>
        <span className={styles.name} data-testid="name">
          {isHidden ? 'Anonymous' : name}
        </span>
        <span title={exactDate(date)} className={styles.date}>
          {humanReadableDate(date)}
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
