import type React from 'react';

declare namespace ITextPoll {
  export interface IProps {
    letter?: string;
    option: string | undefined;
    showResult: boolean;
    percentage?: number;
    onOptionClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isChecked?: boolean;
    mostVoted?: boolean;
    id: string;
  }
}

export { ITextPoll };
