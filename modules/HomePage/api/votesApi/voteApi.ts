import { votesApi } from '../../../shared/api/postsApi.api';
import type { IVotesApi } from './IvotesApi';
import { transformOptions, errorMessage } from './votesHelpers';
import { generateErrMsg } from '../../../shared/logic/generateErrMsg/generateErrMsg';

export const addOneVote = async (id: string): Promise<IVotesApi.IVotesRes> => {
  try {
    const { data: options } = await votesApi.addVote(id);

    const votesData: IVotesApi.IVotesData[] = transformOptions(options);

    return { resData: { error: false, votesData } };
  } catch (error: unknown) {
    const { response } = error as IVotesApi.IErrorData;
    const { message: errMessage } = error as { message: string };

    if (!response)
      return {
        resData: {
          error: true,
          message: errMessage,
        },
      };

    const { data } = response;

    const { message, status_code } = data;

    const generatedMessage = generateErrMsg(errorMessage, status_code, message);
    return {
      resData: {
        error: true,
        message: generatedMessage,
        errorCode: status_code,
      },
    };
  }
};
