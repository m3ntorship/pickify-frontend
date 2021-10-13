import React from 'react';
import type { FC, ReactElement } from 'react';
import FriendsPage from '@modules/FriendsPage/FriendsPage';
import type { GetServerSideProps } from 'next';
import type { CookieSerializeOptions } from 'cookie';
import { serialize } from 'cookie';
import { register } from 'context/AuthUserContext/api/authApi';

const index: FC = (): ReactElement => {
  return <FriendsPage />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    req: { cookies },
  } = context;
  const { user } = cookies as { user: string };
  try {
    await register(user);
  } catch (error: unknown) {
    const { resolvedUrl } = context;
    const serializeOptions: CookieSerializeOptions = {
      httpOnly: false,
      secure: true,
      maxAge: 60 * 60 * 24 * 31,
      path: '/',
    };
    context.res.setHeader(
      'Set-Cookie',
      serialize('lastPage', resolvedUrl, serializeOptions),
    );
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
export default index;
