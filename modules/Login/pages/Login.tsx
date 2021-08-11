import type { FC, ReactElement, ReactText } from 'react';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
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
    <div className={styles['login-body-wrapper']}>
      <div className={styles['login-body']}>
        <div className={styles['main-wrapper']}>
          <header>
            <Logo />
          </header>
          <main className={styles.main}>
            <h1 className={styles['main-h1']}>Welcome to Pickify</h1>
            <p className={styles['main-paragraph']}>
              Pickigy is an online platform that helps people make better
              decisions through voting insights
            </p>
            <button
              type="button"
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
          </main>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Login;
