import type { ReactElement } from 'react';

declare namespace IBox {
  export interface IProps {
    classes?: string;
    isGreyColor?: boolean;
    isWhiteColor?: boolean;
    children: ReactElement;
    withDevider?: boolean;
  }
}

export { IBox };
