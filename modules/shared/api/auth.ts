import firebase from 'firebase';
import axios from 'axios';
import { getUserToken } from '../logic/userId/userId';

const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const firebaseApp =
  firebase.apps.length === 0 ? firebase.initializeApp(config) : firebase.app();

const firebaseAuth = firebaseApp.auth();

export const logoutUser = async (): Promise<void> => {
  await firebase.auth().signOut();
};

export const loginUser = (): void => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebaseAuth.signInWithPopup(provider).then().catch(console.error);
};

firebaseAuth.onAuthStateChanged((user) => {
  if (user) {
    user
      .getIdToken()
      .then((token) => {
        document.cookie = `user=${token}`;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    document.cookie = 'user=;expires = Thu, 01 Jan 1970 00:00:00 GMT';
  }
});

export const register = async (): Promise<{ error: boolean }> => {
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
      localStorage.setItem('uuid', uuid);
      return {
        error: false,
      };
    })
    .catch(() => {
      return { error: true };
    });
};

export default firebaseAuth;
