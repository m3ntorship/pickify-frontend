import axios from 'axios';
import firebase from 'firebase/app';
import { generateErrMsg } from '../../../modules/shared/logic/generateErrMsg/generateErrMsg';
import { setUserUUID } from '../../../modules/shared/logic/userAuth/userAuth';
import { firebaseAuth } from '../../../modules/shared/api/auth';
import type { IAuth } from './IAuth';
import { POSTS_API } from '../../../modules/shared/api/apiConfigs';

export const logoutUser = async (): Promise<void> => {
  await firebaseAuth.signOut();
};

export const loginUser = async (): Promise<string | undefined> => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const data = await firebaseAuth.signInWithPopup(provider);
  const token = await data.user?.getIdToken();
  return token;
};

export const register = async (
  token: string | undefined,
): Promise<IAuth.IAuthResData> => {
  try {
    const { data }: { data: { uuid: string } } = await axios.post(
      `${POSTS_API}/users/register`,
      undefined,
      {
        headers: {
          Authorization: `Bearer ${token ?? ''}`,
        },
      },
    );

    const { uuid } = data;
    setUserUUID(uuid);

    return {
      resData: { error: false, message: 'You have logged in successfully!' },
    };
  } catch (error: unknown) {
    const { response } = error as IAuth.IErrorData;
    const { message: errMessage } = error as { message: string };

    if (!response) return { resData: { error: true, message: errMessage } };

    const { data } = response;

    const { message, status_code: statusCode } = data;

    const generatedMessage = generateErrMsg({}, statusCode, message);
    throw Object.assign(new Error(), {
      error: true,
      message: generatedMessage,
      errorCode: statusCode,
    });
  }
};
