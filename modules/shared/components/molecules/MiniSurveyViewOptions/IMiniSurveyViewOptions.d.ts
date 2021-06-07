declare namespace IMiniSurveyViewOptions {
  export interface IProps {
    optionsGroups: IOptionGroups;
  }

  export interface IOption {
    id: string;
    body: string;
  }
  export interface IGroup {
    id: string;
    options: IOption[];
    name: string;
  }

  export interface IOptionGroups {
    groups: IGroup[];
  }
}

export { IMiniSurveyViewOptions };
