import Head from 'next/head';

export default function Home() {
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
}
