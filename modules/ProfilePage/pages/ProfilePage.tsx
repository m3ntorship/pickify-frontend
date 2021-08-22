import React from 'react';
import type { FC, ReactElement } from 'react';
import ProfileUserLoader from '@modules/shared/components/atoms/ProfileUserLoader/ProfileUserLoader';
import ProfileTextPostLoader from '@modules/shared/components/atoms/ProfileTextPostLoader/ProfileTextPostLoader';
import ProfileImagePostLoader from '@modules/shared/components/atoms/ProfileImagePostLoader/ProfileImagePostLoader';
import { useAuth } from 'context/AuthUserContext/AuthUserContext';
import { capitalizeFirstLetterOfEveryWord } from '@modules/shared/logic/capitalizeFirstLetterOfEveryWord/capitalizeFirstLetterOfEveryWord';
import Head from 'next/head';
import styles from './ProfilePage.module.css';
import Box from '../../shared/components/atoms/Box/Box';
import PageHeader from '../../shared/components/atoms/PageHeader/PageHeader';
import LoaderMessage from '../../shared/components/atoms/LoaderMessage/LoaderMessage';

const ProfilePage: FC = (): ReactElement => {
  const { user } = useAuth();
  const userName =
    user?.username && capitalizeFirstLetterOfEveryWord(user.username);

  return (
    <>
      <Head>
        <title>{userName} | Pickify</title>
      </Head>
      <PageHeader>{userName}</PageHeader>
      <div className="relative">
        <Box classes="mb-6" isGreyColor>
          <Box.Body>
            <div className={styles['profile-user']}>
              <ProfileUserLoader />
            </div>
          </Box.Body>
        </Box>
        <Box classes="mb-6" isGreyColor>
          <Box.Body>
            <ProfileTextPostLoader />
          </Box.Body>
        </Box>
        <Box isGreyColor>
          <Box.Body>
            <ProfileImagePostLoader />
          </Box.Body>
        </Box>
        <LoaderMessage>Coming soon</LoaderMessage>
      </div>
    </>
  );
};
export default ProfilePage;
