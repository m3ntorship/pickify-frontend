import wrapper from 'store';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AuthUserProvider } from '../context/AuthUserContext/AuthUserContext';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

toast.configure();

const Pickly = ({ Component, pageProps }: AppProps): ReactElement => (
  <AuthUserProvider>
    <ToastContainer limit={2} />
    <Component {...pageProps} />
  </AuthUserProvider>
);

export default wrapper.withRedux(Pickly);
