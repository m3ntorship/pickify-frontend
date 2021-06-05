declare namespace ITextPollViewOptions {
  export interface IProps {
    optionsGroups: IOptionGroups;
  }

  export interface IOption {
    id: string;
    body: string;
  }
  export interface IGroup {
    id: string;
    options: IOptions[];
    name: string;
  }

  export interface IOptionGroups {
    groups: IGroup[];
  }
}

export { ITextPollViewOptions };
