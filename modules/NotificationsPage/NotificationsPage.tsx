import React from 'react';
import type { FC, ReactElement } from 'react';
import NotificationLoader from '@modules/shared/components/atoms/NotificationLoader/NotificationLoader';
import Box from '../shared/components/atoms/Box/Box';
import PageHeader from '../shared/components/atoms/PageHeader/PageHeader';
import LoaderMessage from '../shared/components/atoms/LoaderMessage/LoaderMessage';

const NotificationsPage: FC = (): ReactElement => {
  const numberOfNotification = Array.from(Array(7).keys());

  return (
    <Box>
      <>
        <Box.Header>
          <PageHeader>Notifications</PageHeader>
        </Box.Header>
        <Box.Body>
          <div className="relative">
            {numberOfNotification.map((n) => {
              return (
                <div
                  key={n}
                  className="bg-grey-bg shadow-soft p-4 rounded-md mb-xs"
                >
                  <NotificationLoader />
                </div>
              );
            })}
            <LoaderMessage>Coming soon</LoaderMessage>
          </div>
        </Box.Body>
      </>
    </Box>
  );
};

export default NotificationsPage;
