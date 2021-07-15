import type { InlineResponse2001 } from '@m3ntorship/posts-client/dist/post-client';
import { addOneVote } from './voteApi';
import type { IVotesApi } from './IvotesApi';
import { votesApi } from '../../../shared/api/postsApi.api';

jest.mock('../../../shared/api/postsApi.api');

const mockeVotesApi = votesApi as jest.Mocked<typeof votesApi>;

describe('addOneVote', () => {
  it('should return success data with array of updated options', async () => {
    const resolvedData: InlineResponse2001[] = [
      { votes_count: 5, optionId: '1', voted: false },
      { votes_count: 8, optionId: '2', voted: true },
      { votes_count: 10, optionId: '3', voted: false },
    ];

    mockeVotesApi.addVote.mockResolvedValue({
      data: resolvedData,
      status: 200,
      statusText: 'ok',
      headers: 'any',
      config: {},
    });

    const { resData } = await addOneVote('2');

    const successData: IVotesApi.IVotesSuccessData = {
      error: false,
      votesData: [
        { voteCount: 5, optionId: '1', voted: false },
        { voteCount: 8, optionId: '2', voted: true },
        { voteCount: 10, optionId: '3', voted: false },
      ],
    };

    expect(resData).toEqual(successData);
  });

  it('should reject network error without response', async () => {
    mockeVotesApi.addVote.mockRejectedValue({ message: 'network error' });

    const { resData } = await addOneVote('5');

    const rejectedData = { error: true, message: 'network error' };

    expect(resData).toEqual(rejectedData);
  });

  it('should reject server error with response', async () => {
    mockeVotesApi.addVote.mockRejectedValue({
      response: { data: { message: 'server error', status_code: 500 } },
    });

    const { resData } = await addOneVote('5');

    const rejectedData = { error: true, message: 'server error' };

    expect(resData).toEqual(rejectedData);
  });
});
