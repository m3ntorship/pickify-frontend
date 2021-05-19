declare namespace ITabGroup {
  export interface IProps {
    data?: ITabGroupData[];
    setData?: (data: ITabGroupData[]) => void;
  }

  export interface ITabProps {
    id: string;
    active: boolean;
    toggleActiveHandler: (id: string) => void;
    svg: JSX.Element;
    children: string;
  }

  export interface ITabGroupData {
    id: string;
    icon: JSX.Element;
    type: string;
    active: boolean;
  }
}
export { ITabGroup };
