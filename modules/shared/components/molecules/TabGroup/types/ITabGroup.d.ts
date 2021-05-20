import type React from 'react';

declare namespace ITabGroup {
  export interface IProps extends ISharedProps {
    setCheckedValue: (val: string) => void;
  }

  export interface ITabProps extends ITabGroupData, ISharedProps {
    changeValHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export interface ITabGroupData {
    id: string;
    svg: JSX.Element;
    value: 'Image Poll' | 'Mini survey' | 'Text Poll';
  }

  export interface ISharedProps {
    checkedValue: string;
    onlyLabel?: boolean;
    disabled?: boolean;
  }
}
export { ITabGroup };
