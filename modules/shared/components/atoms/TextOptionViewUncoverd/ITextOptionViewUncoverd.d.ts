declare namespace ITextOptionViewUncoverd {
  export interface IProps extends IData {
    letter?: string;
    percentage?: number;
    mostVoted?: boolean;
    isExpanded: boolean;
    type: string;
  }
  export interface IData {
    id: string;
    optionBody: string;
    isOptionChecked?: boolean;
  }
}

export { ITextOptionViewUncoverd };
