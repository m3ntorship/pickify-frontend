import '../styles/globals.css';

import * as nextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context'; // next < 11.2

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
