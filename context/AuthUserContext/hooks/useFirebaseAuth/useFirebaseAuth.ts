import type firebase from 'firebase';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
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

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(authStateChanged);
    return (): void => {
      unsubscribe();
    };
  }, []);

  return { user, loading, isAuthenticated };
};
