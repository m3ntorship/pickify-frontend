import { mockedData } from '@modules/ProfilePage/api/profileMockedData';
import { generateErrMsg } from '@modules/shared/logic/generateErrMsg/generateErrMsg';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import type { IGetUserData } from './IGetUserData';

const postsApi = {
  getUserPosts: async (
    userId: string,
    token: string,
  ): Promise<{
    data: {
      posts: IPostFeed.IPost[];
      postsCount: number;
      user: IPostFeed.IUser;
    };
  }> => {
    return new Promise((resolve, reject) => {
      if (token && userId) {
        resolve(mockedData);
      } else {
        reject(
          Object.assign(new Error(), {
            response: {
              data: {
                message: 'Unauthorized',
                status_code: 409,
              },
            },
          }),
        );
      }
    });
  },
};

export const getUserData = async (
  userId: string,
  token: string,
): Promise<IGetUserData.IGetUserRes> => {
  try {
    const { data } = await postsApi.getUserPosts(userId, token);

    return {
      userData: data,
    };
  } catch (error: unknown) {
    const { response } = error as IGetUserData.IErrorData;
    const { message: errMessage } = error as { message: string };

    if (!response) {
      throw Object.assign(new Error(), {
        userData: { error: true, message: errMessage },
      });
    }

    const { data } = response;

    const { message, status_code: statusCode } = data;

    const generatedMessage = generateErrMsg({}, statusCode, message);

    throw Object.assign(new Error(), {
      userData: {
        error: true,
        message: generatedMessage,
        errorCode: statusCode,
      },
    });
  }
};
