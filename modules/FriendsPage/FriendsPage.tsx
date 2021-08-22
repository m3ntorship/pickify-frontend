import React from 'react';
import type { FC, ReactElement } from 'react';
import FriendLoader from '@modules/shared/components/atoms/FriendLoader/FriendLoader';
import Head from 'next/head';
import styles from './FriendsPage.module.css';
import Box from '../shared/components/atoms/Box/Box';
import PageHeader from '../shared/components/atoms/PageHeader/PageHeader';
import LoaderMessage from '../shared/components/atoms/LoaderMessage/LoaderMessage';

const FriendsPage: FC = (): ReactElement => {
  const numberofLoaders = Array.from(Array(12).keys());
  return (
    <>
      <Head>
        <title>Friends | Pickify</title>
      </Head>
      <PageHeader>Friends</PageHeader>
      <div className={styles['loaders-wrapper']}>
        {numberofLoaders.map((n, index) => {
          if (index >= 6) {
            return (
              <Box key={n} classes="mb-xs hidden md:inline-block" isGreyColor>
                <Box.Body>
                  <FriendLoader />
                </Box.Body>
              </Box>
            );
          }
          return (
            <Box key={n} classes="mb-xs" isGreyColor>
              <Box.Body>
                <FriendLoader />
              </Box.Body>
            </Box>
          );
        })}
        <LoaderMessage>Coming Soon</LoaderMessage>
      </div>
    </>
  );
};

export default FriendsPage;
