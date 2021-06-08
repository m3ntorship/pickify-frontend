declare namespace ITabGroup {
  export interface IProps extends IData {
    setCheckedValue: (val: string) => void;
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
