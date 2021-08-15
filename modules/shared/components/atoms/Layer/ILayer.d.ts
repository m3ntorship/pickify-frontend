import type { ReactElement } from 'react';

declare namespace ILayer {
  export interface IProps {
    classes?: string;
    isGreyColor?: boolean;
    isWhiteColor?: boolean;
    children: ReactElement;
    withDevider?: boolean;
  }
}

export { ILayer };
