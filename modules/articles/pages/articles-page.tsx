import Head from 'next/head';
import type { FC, ReactElement } from 'react';
import { Heading, TitleWithIcon } from '../components';
// import { getArticlesList } from '../api';

const ArticlesPage: FC = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Articles | Pickly</title>
      </Head>
      <div className="w-96 m-6">
        <div className="h-screen flex font-bold text-center">
          <div className="container">
            <TitleWithIcon />
          </div>
          <div>
            <Heading text="political news" />
          </div>
          <div />
        </div>
      </div>
    </>
  );
};

export default ArticlesPage;
