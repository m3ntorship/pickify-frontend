declare namespace IOptionGroupCreation {
  export interface IOption {
    id: string;
    letter: string;
    value: string;
  }
  export interface IProps {
    groupId: string;
    options: { id: string; letter: string; value: string }[];
    addOptionHandler: (GroupId: string) => void;
    deleteOptionHandler: (optionId: string) => void;
    deleteGroupHandler: () => void;
  }
}
export { IOptionGroupCreation };
