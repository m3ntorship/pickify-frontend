import type { AnyAction } from 'redux';
import { createStore } from 'redux';
import type { MakeStore } from 'next-redux-wrapper';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

export interface State {
  tick: string;
}

const reducer = (state: State = { tick: 'init' }, action: AnyAction): State => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload } as State;
    case 'TICK':
      return { ...state, tick: action.payload as string } as State;
    default:
      return state;
  }
};

const makeStore: MakeStore<State> = () => createStore(reducer);

export default createWrapper<State>(makeStore, { debug: true });
