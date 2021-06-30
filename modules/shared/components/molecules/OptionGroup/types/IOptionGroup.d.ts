import type React from 'react';

declare namespace IOptionGroup {
  export interface IOption {
    id: string;
    body: string;
  }
  export interface IProps {
    id: string;
    index: number;
    options: {
      id: string;
      body: string;
    }[];
    onChangeOptionValueHandler: (
      optionId: string,
      groupId: string,
      e: React.ChangeEvent<HTMLInputElement>,
    ) => void;
    onClickDeleteOptionValueHandler: (
      optionId: string,
      groupId: string,
    ) => void;
    onBlurOptionHandler: (
      optionId: string,
      groupId: string,
      e: React.ChangeEvent<HTMLInputElement>,
    ) => void;
    deleteOptionHandler: (optionId: string, groupId: string) => void;
    addOptionHandler: (groupId: string) => void;
  }
}
export { IOptionGroup };
