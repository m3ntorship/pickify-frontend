import { generateErrMsg } from '@modules/shared/logic/generateErrMsg/generateErrMsg';
import axios from 'axios';
import type { IAuth } from './IAuth';

export const register = async (token: string): Promise<IAuth.IAuthResData> => {
  try {
    const { data }: { data: { uuid: string } } = await axios.post(
      'https://pickify-posts-be-dev.m3ntorship.net/api/users/register',
      undefined,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const { uuid } = data;

    return {
      resData: { error: false, uuid },
    };
  } catch (error: unknown) {
    const { response } = error as IAuth.IErrorData;
    const { message: errMessage } = error as { message: string };

    if (!response) return { resData: { error: true, message: errMessage } };

    const { data } = response;

    const { message, status_code } = data;

    const generatedMessage = generateErrMsg({}, status_code, message);
    return {
      resData: {
        error: true,
        message: generatedMessage,
        errorCode: status_code,
      },
    };
  }
};
