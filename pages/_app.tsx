/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import { AppProps } from 'next/dist/next-server/lib/router/router';
// eslint-disable-next-line import/extensions
import wrapper from 'store';
import 'styles/globals.css';

const Pickly = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(Pickly);
