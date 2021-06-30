import { getPosts } from '@modules/shared/api/getPosts.api';
import type { FC, ReactElement } from 'react';
import type { GetServerSideProps } from 'next';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import { HomePage } from '@modules/HomePage';

// const TempTextPoll = ({ post }: { post: IPostFeed.IPost }): ReactElement => {
//   return <h2>{post.id}</h2>;
// };
// const TempTextPollFeed = ({ data }: IPostFeed.IPosts): ReactElement => {
//   return (
//     <>
//       {data.posts.map((post: IPostFeed.IPost) => {
//         if (post.type === 'text poll') {
//           return <TempTextPoll key={post.id} post={post} />;
//         }
//         return <Fragment key={post.id} />;
//       })}
//     </>
//   );
// };
// const TempTextPollFeedWithError = withErrorHandler(TempTextPollFeed);

const Home: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  return <HomePage data={data} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getPosts();
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
