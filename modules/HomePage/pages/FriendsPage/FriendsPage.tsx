import React from 'react';
import type { FC, ReactElement } from 'react';
import FriendLoader from '@modules/shared/components/atoms/FriendLoader/FriendLoader';
import styles from './FriendsPage.module.css';

const FriendsPage: FC = (): ReactElement => {
  const numberOfNotification = Array.from(Array(12).keys());
  return (
    <div>
      <h1 className={styles.header}>Friends</h1>
      <div className={styles['loaders-wrapper']}>
        {numberOfNotification.map((n) => {
          return (
            <div key={n} className={styles.loader}>
              <FriendLoader />
            </div>
          );
        })}
        <h1 className={styles['soon-text']}>Coming soon</h1>
      </div>
    </div>
  );
};

export default FriendsPage;
