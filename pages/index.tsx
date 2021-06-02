/* eslint-disable */
import Head from 'next/head';
import { getPosts } from '@modules/shared/api/getPosts.api';
import type { FC, ReactElement } from 'react';
import type { GetServerSideProps } from 'next';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';

interface ITempTextPollFeed {
  id: string;
}
const TempTextPoll = ({ post }: { post: any }) => {
  return <h2>{post.id}</h2>;
};
const TempTextPollFeed = ({ data }: { data: any }) => {
  return data.posts.map((post: any) => {
    return <TempTextPoll key={post.id} post={post} />;
  });
};

const TempTextPollFeedWithError = withErrorHandler(TempTextPollFeed);

const Home: FC<IPostFeed.Posts> = ({ data }): ReactElement => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Pickly | Pick your choice</title>
      </Head>

      <TempTextPollFeedWithError data={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getPosts();
    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: error },
    };
  }
};

export default Home;
