import type { ReactElement } from 'react';

declare namespace INavigation {
  export interface IProps {
    profilePic?: string;
  }

  export interface INavLinks {
    name: string;
    path: string;
    content: ReactElement;
  }
}
export { INavigation };
