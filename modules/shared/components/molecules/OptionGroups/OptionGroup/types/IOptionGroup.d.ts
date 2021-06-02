declare namespace IOptionGroup {
  export interface IOption {
    id: number;
    letter: string;
    value: string;
  }
  export interface IProps {
    groupId: number;
    options: { id: number; letter: string; value: string }[];
    defaultName: string;
    addOptionHandler: (GroupId: number) => void;
    deleteOptionHandler: (optionId: number) => void;
    deleteGroupHandler: () => void;
  }
}
export { IOptionGroup };
