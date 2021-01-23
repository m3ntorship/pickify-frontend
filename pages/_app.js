/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import { PropTypes } from 'prop-types';
import '../styles/globals.css';

function Pickly({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

Pickly.defaultProps = {
  pageProps: {},
};

Pickly.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
};

export default Pickly;
