import type React from 'react';

declare namespace IRadio {
  export interface IProps {
    size: 'default' | 'small';
    name: string;
    value: string;
    id: string;
    defaultChecked: boolean;
    disabled?: boolean;
    onlyLabel?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
}
export { IRadio };
