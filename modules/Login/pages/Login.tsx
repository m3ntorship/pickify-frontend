import React, { useEffect, useRef } from 'react';
import type { FC, ReactElement, ReactText } from 'react';

import { toast } from 'react-toastify';
import Head from 'next/head';
import {
  loginUser,
  register,
} from '../../../context/AuthUserContext/api/authApi';
import { useRedirect } from '../../shared/hooks/useRedirect/useRedirect';
import { useAuth } from '../../../context/AuthUserContext/AuthUserContext';
import {
  getLastPage,
  clearLastPage,
} from '../../shared/logic/userAuth/userAuth';
import Logo from '../../shared/components/icons/logo.svg';
import Google from '../../shared/components/icons/google.svg';
import styles from './Login.module.css';
import Footer from '../../shared/components/molecules/Footer/Footer';
import Box from '../../shared/components/atoms/Box/Box';

const Login: FC = (): ReactElement => {
  const { loading, isAuthenticated } = useAuth();
  const { redirectToHomePage, redirectToPostPage } = useRedirect();
  const toastId = useRef<ReactText>();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      redirectToHomePage();
    }
  }, [isAuthenticated, loading]);

  const login = async (): Promise<void> => {
    const token: string | undefined = await loginUser();
    toastId.current = toast.warning('Please wait while logging', {
      autoClose: false,
    });
    const { resData } = await register(token);
    toast.dismiss(toastId.current);
    if (!resData.error) {
      const lastPage = getLastPage();
      if (lastPage) {
        redirectToPostPage(lastPage);
        clearLastPage();
      } else {
        redirectToHomePage();
      }
      toast.success(resData.message);
    } else {
      toast.error(resData.message);
    }
  };
  return (
    <>
      <Head>
        <title>Login | Pickify</title>
      </Head>
      <div className={styles['login-body-wrapper']}>
        <div className={styles['login-body']}>
          <div className={styles['main-wrapper']}>
            <header>
              <Logo />
            </header>
            <Box isWhiteColor>
              <Box.Body classes={styles.main}>
                <>
                  <h1 className={styles['main-h1']}>Welcome to Pickify</h1>
                  <p className={styles['main-paragraph']}>
                    Pickify is an online platform that helps people make better
                    decisions through voting insights
                  </p>
                  <button
                    type="button"
                    data-testid="login-test-button"
                    onClick={login}
                    className={styles['sign-in-button']}
                  >
                    <div className={styles['google-logo']}>
                      <div>
                        <Google />
                      </div>
                    </div>
                    <span className={styles['sign-in-button-paragraph']}>
                      Sign in with Google
                    </span>
                  </button>
                </>
              </Box.Body>
            </Box>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
