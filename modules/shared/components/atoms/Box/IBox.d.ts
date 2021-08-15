import type { ReactElement } from 'react';

declare namespace IBox {
  export interface IProps {
    isGreyColor?: boolean;
    isWhiteColor?: boolean;
    children: ReactElement;
    withDevider?: boolean;
  }
}

export { IBox };
