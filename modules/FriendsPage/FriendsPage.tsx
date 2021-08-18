import React from 'react';
import type { FC, ReactElement } from 'react';
import FriendLoader from '@modules/shared/components/atoms/FriendLoader/FriendLoader';
import styles from './FriendsPage.module.css';
import Box from '../shared/components/atoms/Box/Box';
import PageHeader from '../shared/components/atoms/PageHeader/PageHeader';
import LoaderMessage from '../shared/components/atoms/LoaderMessage/LoaderMessage';

const FriendsPage: FC = (): ReactElement => {
  const numberofLoaders = Array.from(Array(12).keys());
  return (
    <>
      <Box.Header>
        <PageHeader>Friends</PageHeader>
      </Box.Header>
      <div className={styles['loaders-wrapper']}>
        {numberofLoaders.map((n, index) => {
          if (index >= 6) {
            return (
              <Box.Body
                key={n}
                classes={`${styles.loader} hidden md:inline-block`}
              >
                <FriendLoader />
              </Box.Body>
            );
          }
          return (
            <Box.Body key={n} classes={styles.loader}>
              <FriendLoader />
            </Box.Body>
          );
        })}
        <LoaderMessage>Coming Soon</LoaderMessage>
      </div>
    </>
  );
};

export default FriendsPage;
