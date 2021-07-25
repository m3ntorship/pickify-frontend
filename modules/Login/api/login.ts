import firebase from 'firebase';
import firebaseAuth from '../../shared/api/auth';

firebaseAuth.onAuthStateChanged((user) => {
  if (user) {
    user
      .getIdToken()
      .then((token) => {
        document.cookie = `user=${token}`;
        localStorage.setItem('user', token);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

export const loginUser = (): void => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebaseAuth.signInWithPopup(provider).then().catch(console.error);
};
