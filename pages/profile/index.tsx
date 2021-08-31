import React from 'react';
import type { FC, ReactElement } from 'react';
import { ProfilePage } from '@modules/ProfilePage/';
import type { CookieSerializeOptions } from 'cookie';
import { serialize } from 'cookie';
import { register } from 'context/AuthUserContext/api/authApi';
import type { GetServerSideProps } from 'next';
import { getPosts } from '@modules/shared/api/getPosts.api';
import { EStatusCode } from '@modules/shared/api/EStatusCode';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';

const Profile: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  return <ProfilePage data={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    req: { cookies },
  } = context;
  const { user } = cookies as { user: string };

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  try {
    await register(user);
    const { data } = await getPosts(user, 0);
    return {
      props: { data },
    };
  } catch (error: unknown) {
    const { url } = context.req as { url: string };
    const { errorCode } = error as { errorCode: number };

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

    if (errorCode === EStatusCode.Unauthorized) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
    return {
      props: { data: error },
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
};

export default Profile;
