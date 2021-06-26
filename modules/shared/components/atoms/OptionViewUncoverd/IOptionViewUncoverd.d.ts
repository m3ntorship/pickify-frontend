declare namespace IOptionViewUncoverd {
  export interface IProps extends IData {
    letter?: string;
    percentage?: number;
    mostVoted?: boolean;
  }
  export interface IData {
    id: string;
    optionBody: string;
    isOptionChecked?: boolean;
  }
}

export { IOptionViewUncoverd };
