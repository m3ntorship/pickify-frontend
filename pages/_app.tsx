import wrapper from 'store';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Provider } from 'next-auth/client';
import type { Session } from 'next-auth';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

toast.configure();

const Pickly = ({ Component, pageProps }: AppProps): ReactElement => {
  const { session } = pageProps as { session: Session };
  return (
    <Provider
      session={session}
      options={{
        clientMaxAge: 60, // Re-fetch session if cache is older than 60 seconds
        keepAlive: 5 * 60, // Send keepAlive message every 5 minutes
      }}
    >
      <ToastContainer limit={2} />
      <Component {...pageProps} />
    </Provider>
  );
};

export default wrapper.withRedux(Pickly);
