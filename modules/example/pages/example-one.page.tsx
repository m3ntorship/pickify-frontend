import Head from 'next/head';
import type { ReactElement } from 'react';

export default function ExampleOne(): ReactElement {
  return (
    <>
      <Head>
        <title>Example One | Pickly</title>
      </Head>
      <div className="w-96 m-6">
        <div className="h-screen flex font-bold">
          <h1>Example 1</h1>
        </div>
      </div>
    </>
  );
}
