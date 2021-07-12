import { votesApi } from '../../../shared/api/postsApi.api';
import type { IVotesApi } from './IvotesApi';
import { generateErrorMessage, transformOptions } from './votesHelpers';

export const addOneVote = async (id: string): Promise<IVotesApi.IVotesRes> => {
  try {
    const { data: options } = await votesApi.addVote(id);

    const votesData: IVotesApi.IVotesData[] = transformOptions(options);

    return { resData: { error: false, votesData } };
  } catch (err: unknown) {
    const { response } = err as IVotesApi.IErrorData;
    const { message: errMessage } = err as { message: string };

    if (!response) return { resData: { error: true, message: errMessage } };

    const {
      data: { message, status_code },
    } = response;

    const errorMessage = generateErrorMessage(status_code, message);

    return { resData: { error: true, message: errorMessage } };
  }
};
