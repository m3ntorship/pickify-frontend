import Head from 'next/head';
import Error from 'next/error';
import { getPosts } from '@modules/shared/api/getPosts.api';
import type { AxiosResponse } from 'axios';
import type { InlineResponse200 } from '@m3ntorship/posts-client/dist/client';
import type { GetServerSideProps } from 'next';
import type { FC, ReactElement } from 'react';
import type { IErrorHandle } from '@modules/shared/api/IErrorHandle';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';

const Home: FC<IPostFeed.IPosts> = (props): ReactElement => {
  const { message, statusCode, postsCount } = props;
  if (message) {
    return <Error title={message} statusCode={statusCode} />;
  }

  return (
    <>
      <Head>
        <title>Pickly | Pick your choice</title>
      </Head>
      <div className="w-96 m-6">
        <div className="h-screen flex font-bold">
          <h1>Pickly</h1>
          <p>{postsCount}</p>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { message, response } = (await getPosts()) as IErrorHandle.IErrorData;

  if (message) {
    return {
      props: {
        message,
        statusCode: response.status,
      },
    };
  }

  const { data } = (await getPosts()) as AxiosResponse<InlineResponse200>;

  return {
    props: {
      posts: data.posts,
      postsCount: data.postsCount,
    },
  };
};

export default Home;
