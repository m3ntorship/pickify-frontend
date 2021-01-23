/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import { PropTypes } from 'prop-types';

import wrapper from '../store';
import '../styles/globals.css';

const Pickly = ({ Component, pageProps }) => <Component {...pageProps} />;

Pickly.defaultProps = {
  pageProps: {},
};

Pickly.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
};

export default wrapper.withRedux(Pickly);
