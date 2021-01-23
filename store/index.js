import { createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const reducer = (state = { tick: 'init' }, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'TICK':
      return { ...state, tick: action.payload };
    default:
      return state;
  }
};

const makeStore = () => createStore(reducer);

export default createWrapper(makeStore, { debug: true });
