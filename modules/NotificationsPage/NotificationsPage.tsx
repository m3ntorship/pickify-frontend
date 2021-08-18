import React from 'react';
import type { FC, ReactElement } from 'react';
import NotificationLoader from '@modules/shared/components/atoms/NotificationLoader/NotificationLoader';
import Box from '../shared/components/atoms/Box/Box';
import PageHeader from '../shared/components/atoms/PageHeader/PageHeader';
import LoaderMessage from '../shared/components/atoms/LoaderMessage/LoaderMessage';
import styles from './NotificationsPage.module.css';

const NotificationsPage: FC = (): ReactElement => {
  const numberOfNotification = Array.from(Array(7).keys());

  return (
    <>
      <Box.Header>
        <PageHeader>Notifications</PageHeader>
      </Box.Header>

      <div className="relative">
        {numberOfNotification.map((n) => {
          return (
            <Box.Body key={n} classes={styles.loader}>
              <NotificationLoader />
            </Box.Body>
          );
        })}
        <LoaderMessage>Coming soon</LoaderMessage>
      </div>
    </>
  );
};

export default NotificationsPage;
