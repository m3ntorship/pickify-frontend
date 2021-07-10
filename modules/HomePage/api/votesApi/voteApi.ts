import { votesApi } from '@modules/shared/api/postsApi.api';
import type { IVotesApi } from './IvotesApi';

export const addOneVote = async (id: string): Promise<IVotesApi.IVotesRes> => {
  try {
    const { data: options } = await votesApi.addVote(id);

    const votesData = options.map((option) => ({
      voteCount: option.votes_count,
      optionId: option.optionId,
    })) as IVotesApi.IVotesData[];

    return { resData: { error: false, votesData } };
  } catch (err: unknown) {
    const {
      response: {
        data: { message, status_code },
      },
    } = err as IVotesApi.IErrorData;

    let errorMessage = message;

    switch (status_code) {
      case 409:
        errorMessage = 'you have already voted for this option group';
        break;
      default:
        errorMessage = message;
    }

    return {
      resData: { message: errorMessage, error: true },
    };
  }
};
