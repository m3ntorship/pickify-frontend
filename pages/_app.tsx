import wrapper from 'store';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import React from 'react';
import Navigation from '@modules/shared/components/molecules/Navigation/Navigation';
import { useRouter } from 'next/router';
import styles from './_app.module.css';
import { AuthUserProvider } from '../context/AuthUserContext/AuthUserContext';

toast.configure();

const Pickly = ({ Component, pageProps }: AppProps): ReactElement => {
  const router = useRouter();
  const showHeader = router.pathname !== '/login';

  return (
    <AuthUserProvider>
      <div className={styles.navigation}>{showHeader && <Navigation />}</div>
      <ToastContainer limit={2} />
      <div className="px-4 md:px-6">
        <Component {...pageProps} />
      </div>
    </AuthUserProvider>
  );
};

export default wrapper.withRedux(Pickly);
