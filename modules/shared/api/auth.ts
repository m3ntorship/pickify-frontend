import firebase from 'firebase';
import axios from 'axios';
import {
  setUserToken,
  setUserUUID,
  clearUserToken,
  clearUserUUID,
  getUserToken,
} from '../logic/userAuth/userAuth';

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
  await firebaseAuth.signInWithPopup(provider);
};

firebaseAuth.onAuthStateChanged((user) => {
  if (user) {
    user
      .getIdToken()
      .then((token) => {
        setUserToken(token);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    clearUserUUID();
    clearUserToken();
  }
});

export const register = async (): Promise<boolean> => {
  return axios
    .post(
      'https://pickify-posts-be-dev.m3ntorship.net/api/users/register',
      undefined,
      {
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        },
      },
    )
    .then((data) => {
      const { uuid } = data.data as { uuid: string };
      setUserUUID(uuid);
      return false;
    })
    .catch(() => {
      return true;
    });
};

export default firebaseAuth;
