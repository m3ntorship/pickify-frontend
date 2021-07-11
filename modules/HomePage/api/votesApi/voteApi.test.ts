import type { IVotesApi } from './IvotesApi';

const option = { optionId: '1', voteCount: 4 };

const addVote = async (id: string): Promise<IVotesApi.IVotesData[]> => {
  const voteApi: Promise<IVotesApi.IVotesData[]> = new Promise(
    (resolve, reject) => {
      if (option.optionId === id) {
        resolve([{ optionId: id, voteCount: option.voteCount + 1 }]);
      } else {
        reject(new Error('cannot find this option'));
      }
    },
  );

  return voteApi;
};

const addOneVote = async (optionId: string): Promise<IVotesApi.IVotesRes> => {
  try {
    const options = await addVote(optionId);
    return { resData: { error: false, votesData: options } };
  } catch (err: unknown) {
    const { message } = err as { message: string };
    return { resData: { error: true, message } };
  }
};

describe('addOneVote', () => {
  it('should return success data with array of updated options when we pass valid id', async () => {
    const { resData } = await addOneVote('1');
    const data = {
      error: false,
      votesData: [{ optionId: '1', voteCount: 5 }],
    };
    expect(resData).toEqual(data);
  });

  it('should return error data when we pass invalid id', async () => {
    const { resData } = await addOneVote('5');
    const data = {
      error: true,
      message: 'cannot find this option',
    };
    expect(resData).toEqual(data);
  });
});
