import wrapper from 'store';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import React from 'react';
import Navigation from '@modules/shared/components/molecules/Navigation/Navigation';
import { useRouter } from 'next/router';
import ScrollToTop from 'react-scroll-to-top';
import Button from '@modules/shared/components/atoms/Button/Button';
import Widgets from '@modules/shared/components/organisms/Widgets/Widgets';
import classNames from 'classnames';
import { AuthUserProvider } from '../context/AuthUserContext/AuthUserContext';
import * as EButton from '../modules/shared/components/atoms/Button/types/EButton';
import styles from './_app.module.css';

toast.configure();

const Pickly = ({ Component, pageProps }: AppProps): ReactElement => {
  const router = useRouter();
  const { pathname } = router;
  const showHeader = pathname !== '/login';
  const showWidgets = pathname !== '/login' && !pathname.includes('/posts/');
  const appContentStyles: string = classNames(styles['app-content'], {
    'md:mt-6xl mt-4xvl': showHeader,
  });
  const pageClasses = classNames(styles.page, {
    'md:mr-6': showHeader,
  });
  return (
    <AuthUserProvider>
      <div>{showHeader && <Navigation />}</div>
      <ScrollToTop
        style={{ background: 'none' }}
        smooth
        component={
          <div className="transform rotate-180 bg-transparent">
            <Button
              onlyIcon
              variant={EButton.buttonVariantValues.PRIMARY}
              size={EButton.buttonSizeValues.MEDIUM}
            />
          </div>
        }
      />
      <ToastContainer limit={2} />

      <section className={appContentStyles}>
        <section className={styles['layout-parent']}>
          <div className={pageClasses}>
            <Component {...pageProps} />
          </div>
          {showWidgets && (
            <div className={styles.widgets}>
              <Widgets />
            </div>
          )}
        </section>
      </section>
    </AuthUserProvider>
  );
};

export default wrapper.withRedux(Pickly);
