declare namespace IOptionGroup {
  export interface IProps {
    caption: string;
    optionsGroups: IOptionGroups;
  }

  export interface IGroup {
    id: string;
    options: IOptions[];
    name: string;
  }

  export interface IOptionGroups {
    groups: IGroup[];
  }
  export interface IOption {
    id: string;
    body: string;
  }
}

export { IOptionGroup };
