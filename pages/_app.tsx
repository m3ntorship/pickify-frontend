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
import { AuthUserProvider } from '../context/AuthUserContext/AuthUserContext';
import * as EButton from '../modules/shared/components/atoms/Button/types/EButton';

toast.configure();

const Pickly = ({ Component, pageProps }: AppProps): ReactElement => {
  const router = useRouter();
  const showHeader = router.pathname !== '/login';

  return (
    <AuthUserProvider>
      <div>{showHeader && <Navigation />}</div>
      <ScrollToTop
        smooth
        component={
          <div className="transform rotate-180">
            <Button
              onlyIcon
              variant={EButton.buttonVariantValues.PRIMARY}
              size={EButton.buttonSizeValues.MEDIUM}
            />
          </div>
        }
      />
      <ToastContainer limit={2} />
      <div className="px-4 md:px-6 md:mt-6xl mt-4xvl">
        <Component {...pageProps} />
      </div>
    </AuthUserProvider>
  );
};

export default wrapper.withRedux(Pickly);
