import axios from 'axios';
import firebase from 'firebase/app';
import { generateErrMsg } from '../../../modules/shared/logic/generateErrMsg/generateErrMsg';
import { setUserUUID } from '../../../modules/shared/logic/userAuth/userAuth';
import { firebaseAuth } from '../../../modules/shared/api/auth';
import type { IAuth } from './IAuth';

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
      'https://pickify-posts-be-dev.m3ntorship.net/api/users/register',
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

    const { message, status_code } = data;

    const generatedMessage = generateErrMsg({}, status_code, message);
    throw Object.assign(new Error(), {
      error: true,
      message: generatedMessage,
      errorCode: status_code,
    });
  }
};
