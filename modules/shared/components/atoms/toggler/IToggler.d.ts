import type React from 'react';

declare namespace IToggler {
  export interface IProps extends IData {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    size: 'default' | 'sm';
    disabled?: boolean;
  }

  export interface IData {
    checked: boolean;
  }
}

export { IToggler };
