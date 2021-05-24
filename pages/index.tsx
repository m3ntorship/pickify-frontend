// import { useEffect } from 'react';
import Head from 'next/head';
import type { ReactElement } from 'react';
// import { postsApi } from '@modules/shared/api/baseURL.api';
// import { GetServerSideProps } from 'next';

export default function Home(): ReactElement {
  // useEffect(() => {
  // if (!props.loading) {
  //   console.log(true);
  // }
  // if (props.posts) {
  //   console.log(props.posts);
  // }
  // if (props.error) {
  //   console.log(props.error);
  // }
  // console.log(posts, loading, error);
  // fetch(`/api/getPosts`)
  //   .then((response) => response.json())
  //   .then(({ posts }) => {
  //     console.log(posts);
  //   });
  // const data = getPosts();
  // console.log(data);
  // postsApi.getPosts().then(({ data }) => {
  //   console.log(data);
  // });
  // }, []);
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

// export async function getServerSideProps() {
// const { data, loading, error } = await getPosts();

// return {
//   props: {
//     posts: data,
//     loading: loading,
//     error: error,
//   },
// };

// return postsApi
//   .getPosts()
//   .then(({ data }) => {
//     return {
//       props: {
//         posts: data,
//         loading: false,
//         error: false,
//       },
//     };
//   })
//   .catch((error) => {
//     return {
//       props: {
//         posts: null,
//         loading: false,
//         error: error,
//       },
//     };
//   });
// }
