import React from 'react';
import type { FC, ReactElement } from 'react';
import ProfileUserLoader from '@modules/shared/components/atoms/ProfileUserLoader/ProfileUserLoader';
import ProfileTextPostLoader from '@modules/shared/components/atoms/ProfileTextPostLoader/ProfileTextPostLoader';
import ProfileImagePostLoader from '@modules/shared/components/atoms/ProfileImagePostLoader/ProfileImagePostLoader';
import { useAuth } from 'context/AuthUserContext/AuthUserContext';
import styles from './profile-page.module.css';

const ProfilePage: FC = (): ReactElement => {
  const { user } = useAuth();

  return (
    <div className="relative w-full">
      <div className={styles['soon-parent']}>
        <h1 className={styles['soon-text']}>Coming soon</h1>
      </div>
      <div>
        <h1 className="text-lg text-dark mb-l">{user?.username}</h1>
      </div>
      <div>
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
      </div>
    </div>
  );
};
export default ProfilePage;
