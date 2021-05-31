import type React from 'react';

declare namespace ITogglerTypes {
  export interface IProps extends IData, IHandlers {
    size: 'default' | 'sm';
  }
  export interface IData {
    disabled: boolean;
    checked: boolean;
    id: string;
  }
  export interface IHandlers {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
}

export { ITogglerTypes };
