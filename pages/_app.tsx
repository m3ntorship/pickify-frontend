import wrapper from 'store';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';
import '../styles/globals.css';

const Pickly = ({ Component, pageProps }: AppProps): ReactElement => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(Pickly);
