import { getPosts } from '@modules/shared/api/getPosts.api';
import type { FC, ReactElement } from 'react';
import type { GetServerSideProps } from 'next';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import { HomePage } from '@modules/HomePage';
import { EStatusCode } from '@modules/shared/api/EStatusCode';

const Home: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  console.log(
    '************************************************************',
    process.env.config,
  );
  return <HomePage data={data} />;
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
    const { data } = await getPosts(user, 0);

    return {
      props: { data },
    };
  } catch (error: unknown) {
    const { errorCode } = error as { errorCode: number };
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
    };
  }
};

export default Home;
