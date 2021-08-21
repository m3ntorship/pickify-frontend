import React from 'react';
import type { FC, ReactElement } from 'react';
import NotificationsPage from '@modules/NotificationsPage/NotificationsPage';
import type { GetServerSideProps } from 'next';
import type { CookieSerializeOptions } from 'cookie';
import { serialize } from 'cookie';

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
    const { url } = context.req as { url: string };
    const serializeOptions: CookieSerializeOptions = {
      httpOnly: false,
      secure: true,
      maxAge: 60 * 60 * 24 * 31,
      path: '/',
    };
    context.res.setHeader(
      'Set-Cookie',
      serialize('lastPage', url, serializeOptions),
    );
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
