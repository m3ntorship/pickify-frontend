import firebase from 'firebase';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  setUserToken,
  setUserUUID,
  clearUserToken,
  clearUserUUID,
  getUserToken,
} from '../logic/userAuth/userAuth';
import { generateErrMsg } from '../logic/generateErrMsg/generateErrMsg';
import type { IAuth } from './IAuth';

const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

export const firebaseApp =
  firebase.apps.length === 0 ? firebase.initializeApp(config) : firebase.app();

const firebaseAuth = firebaseApp.auth();

export const logoutUser = async (): Promise<void> => {
  await firebase.auth().signOut();
};

export const loginUser = async (): Promise<void> => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const data = await firebaseAuth.signInWithPopup(provider);
  const token = await data.user?.getIdToken();
  setUserToken(token ?? '');
};

firebaseAuth.onAuthStateChanged((user) => {
  if (user) {
    user
      .getIdToken()
      .then((token) => {
        const isLiggedIn = getUserToken();
        if (!isLiggedIn) {
          setUserToken(token);
        }
      })
      .catch((err) => {
        const { message } = err as { message: string };
        toast.error(message);
      });
  } else {
    clearUserUUID();
    clearUserToken();
  }
});

export const register = async (): Promise<IAuth.IAuthResData> => {
  try {
    const data = await axios.post(
      'https://pickify-posts-be-dev.m3ntorship.net/api/users/register',
      undefined,
      {
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        },
      },
    );
    const { uuid } = data.data as { uuid: string };
    setUserUUID(uuid);
    return {
      resData: { error: false, message: 'You have logged in successfully!' },
    };
  } catch (error: unknown) {
    const { response } = error as IAuth.IErrorData;
    const { message: errMessage } = error as { message: string };

    if (!response)
      return {
        resData: {
          error: true,
          message: errMessage,
        },
      };

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

export default firebaseAuth;
