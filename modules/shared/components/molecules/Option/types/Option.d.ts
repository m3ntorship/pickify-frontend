import type React from 'react';

declare namespace IOption {
  export interface IProps {
    id: string;
    index: number;
    deletable: boolean;
    optionValue: string;
    onChangeOptionValueHandler: (
      optionId: string,
      e: React.ChangeEvent<HTMLInputElement>,
    ) => void;
    onClickDeleteOptionValueHandler: (optionId: string) => void;
    onBlurOptionHandler: (
      optionId: string,
      e: React.ChangeEvent<HTMLInputElement>,
    ) => void;
    deleteOptionHandler: (optionId: string) => void;
  }
  interface IOptionsMap {
    options: Record<string, string>;
  }
}
export { IOption };
