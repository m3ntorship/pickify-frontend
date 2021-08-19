import React from 'react';
import type { FC, ReactElement } from 'react';
import NotificationsPage from '@modules/NotificationsPage/NotificationsPage';
import type { GetServerSideProps } from 'next';

const index: FC = (): ReactElement => {
  return <NotificationsPage />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    req: { cookies },
  } = context;
  const { user } = cookies as { user: string };
  const data = await Promise.resolve(true);

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { data },
  };
};

export default index;
