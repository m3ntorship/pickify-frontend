import type React from 'react';

declare namespace IRadio {
  export interface IProps {
    size: 'default' | 'small';
    name: string;
    value: string;
    id: string;
    defaultChecked?: boolean;
    label?: string;
    labelStyle?: string;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
}
export { IRadio };
