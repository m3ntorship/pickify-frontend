import type React from 'react';

declare namespace ITabGroup {
  export interface IProps {
    data?: ITabGroupData[];
    setData?: (data: ITabGroupData[]) => void;
  }

  export interface ITabProps {
    id: string;
    value: 'checked' | 'not-checked';
    changeValHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    svg: JSX.Element;
    children: string;
  }

  export interface ITabGroupData {
    id: string;
    icon: JSX.Element;
    type: string;
    value: 'checked' | 'not-checked';
  }
}
export { ITabGroup };
