import type { ITab } from '../../atoms/Tab/ITab';

declare namespace ITabGroup {
  export interface IProps extends IData, ITab.IHandlers {
    checkedValue: string;
  }

  export interface IData {
    tabsData: ITabGroupData[];
  }

  export interface ITabGroupData {
    id: string;
    svg: JSX.Element;
    value: 'Image Poll' | 'Mini survey' | 'Text Poll';
  }
}
export { ITabGroup };
