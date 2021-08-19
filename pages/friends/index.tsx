import React from 'react';
import type { FC, ReactElement } from 'react';
import FriendsPage from '@modules/FriendsPage/FriendsPage';
import type { GetServerSideProps } from 'next';

const index: FC = (): ReactElement => {
  return <FriendsPage />;
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
