import firebase from 'firebase/app';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { register } from '../../api/authApi';
import {
  clearUserToken,
  clearUserUUID,
  setUserToken,
} from '../../../../modules/shared/logic/userAuth/userAuth';
import { firebaseAuth } from '../../../../modules/shared/api/auth';
import type { IUseFirebaseAuth } from './IUseFirebaseAuth';

const setUserData = (
  user: firebase.User | null,
): IUseFirebaseAuth.IUserData => ({
  username: user?.displayName ?? '',
  email: user?.email ?? '',
  userImg: user?.photoURL ?? '',
});

export const useFirebaseAuth = (): IUseFirebaseAuth.IProps => {
  const [user, setUser] = useState<IUseFirebaseAuth.IUserData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const clearUserState = (): void => {
    setUser(null);
    setLoading(false);
    clearUserUUID();
    clearUserToken();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const authStateChanged = async (
      userState: firebase.User | null,
    ): Promise<void> => {
      if (!userState) {
        clearUserState();

        return;
      }
      setLoading(true);
      try {
        const token: string = await userState.getIdToken();
        await register(token);

        const formattedUser = setUserData(userState);

        setUser(formattedUser);
        setLoading(false);
        setIsAuthenticated(true);
        setUserToken(token);
      } catch (error: unknown) {
        const { message } = error as { message: string };
        toast.error(message);
        clearUserState();
      }
    };
    const unsubscribe = firebaseAuth.onIdTokenChanged(authStateChanged);
    return (): void => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const everyTenMinutes = 10 * 60 * 1000;
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const handle = setInterval(async (): Promise<void> => {
      const { currentUser } = firebase.auth();

      if (currentUser) await currentUser.getIdToken(true);
    }, everyTenMinutes);

    // clean up setInterval
    return (): void => {
      clearInterval(handle);
    };
  }, []);

  return { user, loading, isAuthenticated };
};
