import axios from 'axios';
import { generateErrMsg } from '../../shared/logic/generateErrMsg/generateErrMsg';
import type { IGetUserData } from './IGetUserData';
import { configPostCreation } from '../../shared/configuration/ConfigPostCreation/config';
import { errorMessage } from './getUserHelpers';
import { POSTS_API } from '../../shared/api/apiConfigs';

export const getUserData = async (
  userId: string,
  token: string,
  offset: number,
): Promise<IGetUserData.IGetUserRes> => {
  try {
    const limit = configPostCreation.postsLimit;
    const { data }: IGetUserData.IGetUserRes = await axios.get(
      `${POSTS_API}/users/${userId}/posts?limit=${limit}&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return {
      data,
    };
  } catch (error: unknown) {
    const { response } = error as IGetUserData.IErrorData;
    const { message: errMessage } = error as { message: string };

    if (!response) {
      throw Object.assign(new Error(), {
        data: { error: true, message: errMessage },
      });
    }

    const { data } = response;
    const { message, status_code: statusCode } = data;

    const generatedMessage = generateErrMsg(errorMessage, statusCode, message);
    throw Object.assign(new Error(), {
      data: {
        error: true,
        message: generatedMessage,
        errorCode: statusCode,
      },
    });
  }
};
