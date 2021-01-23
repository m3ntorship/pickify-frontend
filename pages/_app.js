/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import { PropTypes } from 'prop-types';

import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import initStore from '../store';

function Pickly({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

Pickly.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  store: PropTypes.object.isRequired,
};

export default withRedux(initStore)(Pickly);
