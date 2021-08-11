import React from 'react';
import type { FC, ReactElement } from 'react';
import FriendLoader from '@modules/shared/components/atoms/FriendLoader/FriendLoader';

const FriendsPage: FC = (): ReactElement => {
  const numberOfNotification = Array.from(Array(12).keys());

  return (
    <div className="">
      <h1 className="text-lg text-dark mb-l">Friends</h1>
      <h1 className="text-3xl font-bold text-dark-grey whitespace-nowrap z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Coming soon
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {numberOfNotification.map((n) => {
          return (
            <div className="bg-white shadow-soft p-4 rounded-md mb-xs w-max ">
              <FriendLoader key={n} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendsPage;
