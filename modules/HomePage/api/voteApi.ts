import { votesApi } from '@modules/shared/api/postsApi.api';
import type { InlineResponse2002 } from '@m3ntorship/posts-client/dist/client';
import type { AxiosError } from 'axios';

export const addOneVote = async (
  id: string,
): Promise<
  | {
      resData: InlineResponse2002[];
      error: boolean;
      message?: undefined;
    }
  | {
      resData: never[];
      error: boolean;
      message: string;
    }
> => {
  try {
    const { data } = await votesApi.addVote(id);
    return { resData: data, error: false };
  } catch (err: unknown) {
    const { message } = err as AxiosError<{ message: string }>;

    return {
      resData: [],
      error: true,
      message,
    };
  }
};
