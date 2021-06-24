import type { MouseEvent } from 'react';

declare namespace IModal {
  export interface IProps {
    closeModalHandler: (e: MouseEvent<HTMLDivElement>) => void;
  }
}

export { IModal };
