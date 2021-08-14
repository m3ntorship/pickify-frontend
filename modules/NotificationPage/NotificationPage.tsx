import React from 'react';
import type { FC, ReactElement } from 'react';
import NotificationLoader from '@modules/shared/components/atoms/NotificationLoader/NotificationLoader';

const NotificationPage: FC = (): ReactElement => {
  const numberOfNotification = Array.from(Array(7).keys());

  return (
    <div className="">
      <h1 className="text-lg text-dark mb-l">Notification</h1>
      <h1 className="text-3xl font-bold text-dark-grey whitespace-nowrap z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Coming soon
      </h1>
      {numberOfNotification.map((n) => {
        return (
          <div className="bg-white shadow-soft p-4 rounded-md mb-xs ">
            <NotificationLoader key={n} />
          </div>
        );
      })}
    </div>
  );
};

export default NotificationPage;
