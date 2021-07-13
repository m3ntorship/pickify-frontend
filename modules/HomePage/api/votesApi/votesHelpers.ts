import type { InlineResponse2001 } from '@m3ntorship/posts-client/dist/post-client';
import type { IVotesApi } from './IvotesApi';

export const transformOptions = (
  options: InlineResponse2001[],
): IVotesApi.IVotesData[] => {
  const transformedOptions: IVotesApi.IVotesData[] = options.map((option) => ({
    voteCount: option.votes_count,
    optionId: option.optionId,
  })) as IVotesApi.IVotesData[];

  return transformedOptions;
};

export const generateErrorMessage = (
  statusCode: number,
  defaultMessage: string,
): string => {
  switch (statusCode) {
    case 409:
      return 'you have already voted for this option group';
    case 404:
      return 'something went wrong';
    default:
      return defaultMessage;
  }
};
