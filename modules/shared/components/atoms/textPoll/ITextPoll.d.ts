import type React from 'react';

declare namespace ITextPoll {
  export interface IProps extends IData, IHandlers {
    letter?: string;
    percentage?: number;
    showResult: boolean;
    mostVoted?: boolean;
  }
  export interface IData {
    id: string;
    option: string;
    isChecked?: boolean;
  }
  export interface IHandlers {
    onOptionClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }
}

export { ITextPoll };
