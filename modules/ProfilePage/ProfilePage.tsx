import React from 'react';
import type { FC, ReactElement } from 'react';
import ProfileUserLoader from '@modules/shared/components/atoms/ProfileUserLoader/ProfileUserLoader';
import ProfileTextPostLoader from '@modules/shared/components/atoms/ProfileTextPostLoader/ProfileTextPostLoader';
import ProfileImagePostLoader from '@modules/shared/components/atoms/ProfileImagePostLoader/ProfileImagePostLoader';
import { useAuth } from 'context/AuthUserContext/AuthUserContext';

const ProfilePage: FC = (): ReactElement => {
  const { user } = useAuth();

  return (
    <div className="">
      <h1 className="text-lg text-dark mb-l">{user?.username}</h1>
      <h1 className="text-3xl font-bold text-dark-grey whitespace-nowrap z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Coming soon
      </h1>
      <div>
        <div className="bg-white shadow-soft p-4 rounded-md mb-xs flex justify-center ">
          <ProfileUserLoader />
        </div>

        <div className="bg-white shadow-soft p-4 rounded-md mb-xs flex justify-start items-center ">
          <ProfileTextPostLoader />
        </div>

        <div className="bg-white shadow-soft p-4 rounded-md mb-xs flex justify-start items-center ">
          <ProfileImagePostLoader />
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
