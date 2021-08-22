import React from 'react';
import type { FC, ReactElement } from 'react';
import { Login } from '@modules/Login';
import { register } from 'context/AuthUserContext/api/authApi';
import type { GetServerSideProps } from 'next';

const index: FC = (): ReactElement => {
  return <Login />;
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    req: { cookies },
  } = context;
  const { user } = cookies as { user: string };
  try {
    await register(user);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  } catch (error: unknown) {
    return {
      props: {},
    };
  }
};
export default index;
