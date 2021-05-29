import Head from 'next/head';
import { getPosts } from '@modules/shared/api/getPosts.api';
import type { GetServerSideProps } from 'next';
import type { FC, ReactElement } from 'react';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';

const Home: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  console.log(data);

  return (
    <>
      <Head>
        <title>Pickly | Pick your choice</title>
      </Head>
      <div className="w-96 m-6">
        <div className="h-screen flex font-bold">
          <h1>Pickly</h1>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getPosts();

  return {
    props: {
      data,
    },
  };
};

export default Home;
