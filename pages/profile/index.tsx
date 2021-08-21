import React from 'react';
import type { FC, ReactElement } from 'react';
import { ProfilePage } from '@modules/ProfilePage/';
import type { CookieSerializeOptions } from 'cookie';
import { serialize } from 'cookie';
import { register } from 'context/AuthUserContext/api/authApi';
import type { GetServerSideProps } from 'next';

const Profile: FC = (): ReactElement => {
  return <ProfilePage />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    req: { cookies },
  } = context;
  const { user } = cookies as { user: string };
  try {
    await register(user);
  } catch (error: unknown) {
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
    props: {},
  };
};

export default Profile;
