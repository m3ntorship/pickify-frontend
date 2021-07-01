import type React from 'react';

declare namespace ITextOptionViewCovered {
  export interface IProps extends IData, IHandlers {
    letter?: string;
  }
  export interface IData {
    id: string;
    optionBody: string;
  }
  export interface IHandlers {
    onOptionClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }
}

export { ITextOptionViewCovered };
