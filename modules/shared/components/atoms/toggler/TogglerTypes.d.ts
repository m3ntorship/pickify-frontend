import type React from 'react';

declare namespace TogglerTypes {
  export interface Props {
    size: 'default' | 'sm';
    disabled?: boolean;
    checked: boolean;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
}

export { TogglerTypes };
