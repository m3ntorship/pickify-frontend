import React from 'react';
import type { FC, ReactElement } from 'react';
import { ProfilePage } from '@modules/ProfilePage/';
import type { CookieSerializeOptions } from 'cookie';
import { serialize } from 'cookie';
import type { GetServerSideProps } from 'next';
import { EStatusCode } from '@modules/shared/api/EStatusCode';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import { getUserData } from '@modules/ProfilePage/api/getUserData';
import type { IGetUserData } from '@modules/ProfilePage/api/IGetUserData';

const User: FC<{
  data: {
    posts: IPostFeed.IPost[];
    postsCount: number;
    totalPostsCount: number;
    user: IPostFeed.IUser;
  };
}> = ({ data }): ReactElement => {
  return <ProfilePage data={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    req: { cookies },
    query: { userid },
  } = context;
  const { user } = cookies as { user: string };

  try {
    const { data } = await getUserData(userid as string, user, 0);
    return {
      props: { data },
    };
  } catch (error: unknown) {
    const { url } = context.req as { url: string };
    const { data } = error as { data: IGetUserData.IUserErrorData };

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

    if (data.errorCode === EStatusCode.Unauthorized) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    return {
      props: {
        data,
      },
    };
  }
};

export default User;
