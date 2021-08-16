import React from 'react';
import type { FC, ReactElement } from 'react';
import ProfileUserLoader from '@modules/shared/components/atoms/ProfileUserLoader/ProfileUserLoader';
import ProfileTextPostLoader from '@modules/shared/components/atoms/ProfileTextPostLoader/ProfileTextPostLoader';
import ProfileImagePostLoader from '@modules/shared/components/atoms/ProfileImagePostLoader/ProfileImagePostLoader';
import { useAuth } from 'context/AuthUserContext/AuthUserContext';
import { capitalizeFirstLetterOfEveryWord } from '@modules/shared/logic/capitalizeFirstLetterOfEveryWord/capitalizeFirstLetterOfEveryWord';
import styles from './ProfilePage.module.css';
import Box from '../../shared/components/atoms/Box/Box';
import PageHeader from '../../shared/components/atoms/PageHeader/PageHeader';
import LoaderMessage from '../../shared/components/atoms/LoaderMessage/LoaderMessage';

const ProfilePage: FC = (): ReactElement => {
  const { user } = useAuth();
  const userName =
    user?.username && capitalizeFirstLetterOfEveryWord(user.username);

  return (
    <Box>
      <>
        <Box.Header>
          <PageHeader>{userName}</PageHeader>
        </Box.Header>
        <Box.Body>
          <div className="relative">
            <div className={styles.loader}>
              <div className={styles['profile-user']}>
                <ProfileUserLoader />
              </div>
            </div>
            <div className={styles.loader}>
              <ProfileTextPostLoader />
            </div>
            <div className={styles.loader}>
              <ProfileImagePostLoader />
            </div>
            <LoaderMessage>Coming soon</LoaderMessage>
          </div>
        </Box.Body>
      </>
    </Box>
  );
};
export default ProfilePage;
