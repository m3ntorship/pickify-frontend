import React, { createContext, useContext } from 'react';
import type { FC, ReactElement } from 'react';
import type { IUseFirebaseAuth } from './hooks/useFirebaseAuth/IUseFirebaseAuth';
import { useFirebaseAuth } from './hooks/useFirebaseAuth/useFirebaseAuth';

const userData = {
  username: '',
  email: '',
  userImg: '',
};

const authUserContext = createContext({
  user: userData as IUseFirebaseAuth.IUserData | null,
  isAuthenticated: false,
  loading: true,
});

export const AuthUserProvider: FC = ({ children }): ReactElement => {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
};

export const useAuth = (): IUseFirebaseAuth.IProps =>
  useContext(authUserContext);
