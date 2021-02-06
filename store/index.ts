import { createStore, AnyAction } from 'redux';
import { MakeStore, createWrapper, HYDRATE } from 'next-redux-wrapper';

export interface State {
  tick: string;
}

const reducer = (state: State = { tick: 'init' }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'TICK':
      return { ...state, tick: action.payload };
    default:
      return state;
  }
};

const makeStore: MakeStore<State> = () => createStore(reducer);

export default createWrapper<State>(makeStore, { debug: true });
