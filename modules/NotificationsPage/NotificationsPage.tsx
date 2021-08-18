import React from 'react';
import type { FC, ReactElement } from 'react';
import NotificationLoader from '@modules/shared/components/atoms/NotificationLoader/NotificationLoader';
import Box from '../shared/components/atoms/Box/Box';
import PageHeader from '../shared/components/atoms/PageHeader/PageHeader';
import LoaderMessage from '../shared/components/atoms/LoaderMessage/LoaderMessage';

const NotificationsPage: FC = (): ReactElement => {
  const numberOfNotification = Array.from(Array(7).keys());

  return (
    <>
      <PageHeader>Notifications</PageHeader>
      <div className="relative">
        {numberOfNotification.map((n) => {
          return (
            <Box key={n} classes="mb-xs" isGreyColor>
              <Box.Body>
                <NotificationLoader />
              </Box.Body>
            </Box>
          );
        })}
        <LoaderMessage>Coming soon</LoaderMessage>
      </div>
    </>
  );
};

export default NotificationsPage;
