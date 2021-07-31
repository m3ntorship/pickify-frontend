import Post from '@modules/Post/Post';
import type { FC, ReactElement } from 'react';
import { EStatusCode } from '@modules/shared/api/EStatusCode';
import type { GetServerSideProps } from 'next';
import { getSinglePost } from '../../modules/shared/api/getSinglePost';
import type { ISeparatePost } from '../../modules/shared/types/seperatePost/ISeparatePost';

const SeparatePost: FC<ISeparatePost.IProps> = ({
  data,
  error,
}): ReactElement => {
  return (
    <>
      {error.length && (
        <div className="bg-primary text-xl text-center">Post not found!</div>
      )}
      {!error.length && <Post postData={data} />} ;
    </>
  );
};
export default SeparatePost;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    req: { cookies },
  } = context;
  const { user } = cookies as { user: string };

  const { id } = context.params as { id: string };

  try {
    const { data } = await getSinglePost(id, user);

    return {
      props: { data, error: '' },
    };
  } catch (error: unknown) {
    console.log('the error is ', error);

    const { errorCode, message } = error as {
      errorCode: number;
      message: string;
    };

    if (errorCode === EStatusCode.Unauthorized) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
    return {
      props: {
        data: {},
        error: message,
      },
    };
  }
};
