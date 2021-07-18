import type { InlineResponse2001 } from '@m3ntorship/posts-client/dist/post-client';
import type { IVotesApi } from './IvotesApi';
import { EStatusCode } from '../../../shared/api/EStatusCode';

export const transformOptions = (
  options: InlineResponse2001[],
): IVotesApi.IVotesData[] => {
  const transformedOptions: IVotesApi.IVotesData[] = options.map((option) => ({
    voteCount: option.votes_count,
    optionId: option.optionId,
    voted: option.voted,
  })) as IVotesApi.IVotesData[];

  return transformedOptions;
};

export const errorMessage: Record<number, string> = {
  [EStatusCode.Conflict]: 'you have already voted for this option group',
  [EStatusCode.NotFound]: 'something went wrong',
  [EStatusCode.Unauthorized]: 'Unauthorized',
  [EStatusCode.BadRequest]: 'Bad request',
};
