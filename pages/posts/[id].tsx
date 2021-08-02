import Post from '@modules/Post/Post';
import type { FC, ReactElement } from 'react';
import { EStatusCode } from '@modules/shared/api/EStatusCode';
import type { GetServerSideProps } from 'next';
import type { CookieSerializeOptions } from 'cookie';
import { serialize } from 'cookie';
import { getSinglePost } from '../../modules/shared/api/getSinglePost';
import type { ISeparatePost } from '../../modules/shared/types/seperatePost/ISeparatePost';

const SeparatePost: FC<ISeparatePost.IProps> = ({ data }): ReactElement => {
  return (
    <div className="flex justify-center">
      <Post data={data} />
    </div>
  );
};
export default SeparatePost;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    req: { cookies },
  } = context;
  const { user } = cookies as { user: string };

  const { id } = context.params as { id: string };
  if (!user) {
    const serializeOptions: CookieSerializeOptions = {
      httpOnly: false,
      secure: true,
      maxAge: 60 * 60 * 24 * 31,
      path: '/',
    };
    context.res.setHeader(
      'Set-Cookie',
      serialize('lastPage', id, serializeOptions),
    );
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  try {
    const { data } = await getSinglePost(id, user);

    return {
      props: { data },
    };
  } catch (error: unknown) {
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
        data: {
          error: true,
          errorCode,
          message,
        },
      },
    };
  }
};
