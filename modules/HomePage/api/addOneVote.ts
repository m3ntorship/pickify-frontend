import { votesApi } from '@modules/shared/api/postsApi.api';

export const addOneVote = async (id: string): Promise<void> => {
  const unAuthorized = 401;
  try {
    await votesApi.addVote(id);
    return { data };
  } catch (err) {
    return {
      data: {
        error: true,
        errorCode: err.response ? err.response.status : unAuthorized,
        message: err.message,
      },
    };
  }
  //   const unAuthorized = 401;
  //   votesApi
  //     .addVote(id)
  //     .then((data) => {
  //       return { data };
  //     })
  //     .catch((err: unknown) => {
  //       return {
  //         data: {
  //           error: true,
  //           errorCode: err.response ? err.response.status : unAuthorized,
  //           message: err.message,
  //         },
  //       };
  //     });
};
