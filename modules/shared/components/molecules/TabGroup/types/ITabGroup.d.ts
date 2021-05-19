import type React from 'react';

declare namespace ITabGroup {
  export interface IProps {
    data?: ITabGroupData[];
    setData?: (data: ITabGroupData[]) => void;
  }

  export interface ITabProps extends ITabGroupData {
    changeValHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export interface ITabGroupData {
    id: string;
    svg: JSX.Element;
    children: string;
    value: 'checked' | 'not-checked';
  }
}
export { ITabGroup };
