import type React from 'react';

declare namespace IRadio {
  export interface IProps extends IData, IHandlers {
    size: 'default' | 'small';
    name: string;
    defaultChecked: boolean;
    disabled?: boolean;
    onlyLabel?: boolean;
  }

  export interface IData {
    value: string;
    id: string;
  }

  export interface IHandlers {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
}

export { IRadio };
