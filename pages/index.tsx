import Head from 'next/head';
import { getPosts } from '@modules/shared/api/getPosts.api';
import type { InlineResponse200 } from '@m3ntorship/posts-client/dist/client';
import type { GetServerSideProps } from 'next';
import type { FC, ReactElement } from 'react';

const Home: FC<InlineResponse200> = ({ postsCount }): ReactElement => {
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
  const { data } = await getPosts();

  return {
    props: {
      posts: data.posts,
      postsCount: data.postsCount,
    },
  };
};

export default Home;
