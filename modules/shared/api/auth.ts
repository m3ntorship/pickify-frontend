import firebase from 'firebase';

const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

let firebaseApp = null;
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebaseApp = firebase.app();
}

const firebaseAuth = firebase.auth(firebaseApp);

export const logoutUser = (): void => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      document.cookie = '';
      localStorage.removeItem('user');
    })
    .catch((err) => {
      console.log(err);
    });
};

export default firebaseAuth;
