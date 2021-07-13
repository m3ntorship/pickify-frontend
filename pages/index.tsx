import { getPostsTemp } from '@modules/shared/api/getPosts.api';
import type { FC, ReactElement } from 'react';
import type { GetServerSideProps } from 'next';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import { HomePage } from '@modules/HomePage';

const Home: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  return <HomePage data={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    req: { cookies },
  } = context;

  const { user } = cookies as { user: string };

  try {
    const { data } = await getPostsTemp(user);
    return {
      props: { data },
    };
  } catch (error: unknown) {
    return {
      props: { data: error },
    };
  }
};

export default Home;
